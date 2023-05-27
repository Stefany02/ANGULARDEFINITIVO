import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Study } from '../model/study.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class StudyService extends BaseService<Study> {
  constructor(protected override http: HttpClient) {
    super(http, 'studies');
  }
}
