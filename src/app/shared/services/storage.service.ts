import { Injectable } from '@angular/core'
import { BehaviorSubject, type Observable } from 'rxjs'
import { ResourceType } from '../../resource-type'

export interface IResource {
  resource: ResourceType
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly resourceBehaviorSubject = new BehaviorSubject<IResource[]>([])
  readonly $resources = this.resourceBehaviorSubject.asObservable()

  constructor () {
    this.initializeStorage()
  }

  private initializeStorage (): void {
    this.resourceBehaviorSubject.next([{ resource: ResourceType.Wood, quantity: 100 }])
  }
}
