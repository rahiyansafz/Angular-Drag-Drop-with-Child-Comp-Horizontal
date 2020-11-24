import { Injectable } from '@angular/core';
import { CdkDragDrop, CdkDrop, moveItemInArray, transferArrayItem } from '@angular/cdk-experimental/drag-drop';

@Injectable({
  providedIn: "root"
})
export class DragService {

  public childConnector: CdkDrop;
  public parentConnector: CdkDrop;

  setChildConnector(childRef: CdkDrop) {
    this.childConnector = childRef;
  }

  setParentConnector(parentRef: CdkDrop) {
    this.parentConnector = parentRef;
  }

  drop(event) {
    console.log(event.previousContainer.data[event.previousIndex]);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}