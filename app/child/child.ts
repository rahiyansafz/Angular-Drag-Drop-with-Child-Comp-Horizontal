import { Component, OnInit, Input, ViewChild } from "@angular/core";
import {CdkDragDrop, CdkDrop, moveItemInArray, transferArrayItem} from '@angular/cdk-experimental/drag-drop';
import { DragService } from './drag.service'

@Component({
  selector: "app-drag-drop-child",
  templateUrl: "./child.html",
  styleUrls: ['./child.scss']
})

export class ChildComp implements OnInit {
  @ViewChild('child') child: CdkDrop;
  connectedParent: CdkDrop[];

  done = [
    'Get up',
    'Have breakfast',
    'Brush teeth',
    'Check reddit'
  ];

  constructor(public dragService: DragService) { }

  ngOnInit() {
    this.dragService.setChildConnector(this.child);
    this.connectedParent = [this.dragService.parentConnector];
  }

  drop(event: CdkDragDrop<any[]>) {
    this.dragService.drop(event);
  }
}