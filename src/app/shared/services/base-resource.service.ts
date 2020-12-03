import { BaseResourceModel } from '../models/base-resource.model';

import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


export abstract class BaseResourceService<T extends BaseResourceModel> {

    protected http: HttpClient;
    protected UrlService: string = environment.UrlService;

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResourceFn: (jsonData: any) => T
    ) {
        this.http = injector.get(HttpClient);
    }

    obterTodos(): Observable<T[]> {
        return this.http.get(this.UrlService + this.apiPath).pipe(
            map(this.jsonDataToResources.bind(this)),
            catchError(this.handleError)
        );
    }

    obterPorId(code: string): Observable<T> {
        const url = `${this.apiPath}/${code}`;

        return this.http.get(this.UrlService + url).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        );
    }

    adicionar(resource: T): Observable<T> {
        return this.http.post(this.UrlService + this.apiPath, resource).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        );
    }

    atualizar(resource: T): Observable<T> {
        const url = `${this.apiPath}/${resource.code}`;

        return this.http.put(this.UrlService + url, resource).pipe(
            map(() => resource),
            catchError(this.handleError)
        );
    }

    deletar(code: string): Observable<any> {
        const url = `${this.apiPath}/${code}`;

        return this.http.delete(this.UrlService + url).pipe(
            map(() => null),
            catchError(this.handleError)
        );
    }

    // PROTECTED METHODS

    protected jsonDataToResources(jsonData: any[]): T[] {
        const resources: T[] = [];
        jsonData.forEach(
            element => resources.push(this.jsonDataToResourceFn(element))
        );
        return resources;
    }

    protected jsonDataToResource(jsonData: any): T {
        return this.jsonDataToResourceFn(jsonData);
    }

    protected handleError(error: any): Observable<any> {
        console.log('ERRO NA REQUISIÇÃO => ', error);
        return throwError(error);
    }
}
