import { Component, OnInit, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { CdkDragDrop, CdkDrop, moveItemInArray, transferArrayItem } from '@angular/cdk-experimental/drag-drop';
import { DragService } from "./child/drag.service";

@Component({
  selector: "app-drag-drop",
  templateUrl: "./drag-drop-example.html",
  styleUrls: ["./drag-drop-example.scss"]
})
export class DragDropComponent implements OnInit {
  @ViewChild('parent') parent: CdkDrop;
  connectedChild: CdkDrop[];

  axisLock: 'x' | 'y';
  todo = [
    'Come up with catchy start-up name',
    'Add "blockchain" to name',
    'Sell out',
    'Profit',
    'Go to sleep'
  ];
  horizontalData = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  constructor(private dragService: DragService) { }

  ngOnInit() {
    this.dragService.setParentConnector(this.parent);
    this.connectedChild = [this.dragService.childConnector];
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log('parent')
    this.dragService.drop(event);
  }

  onDragStart(event: CdkDragDrop<string[]>) {
    // console.log(event)
  }
}
