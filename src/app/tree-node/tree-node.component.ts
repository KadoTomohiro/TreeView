import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreeNode } from '../treeNode';


@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  isShown: boolean;
  newNodeName: string;
  @Input() node: TreeNode;
  @Output() removeNode: EventEmitter<TreeNode>;

  constructor() {
    this.removeNode = new EventEmitter<TreeNode>();
  }

  ngOnInit() {
  }

  show() {
    this.isShown = true;
  }

  hide() {
    this.isShown = false;
  }

  addNode() {
    if (!this.newNodeName) {
      return;
    }
    this.node.add(this.newNodeName);
    this.isShown = true;
    this.newNodeName = '';
  }

  remove() {
    this.removeNode.emit(this.node);
  }

  onRemoveNode(childNode: TreeNode) {
    this.node.remove(childNode);
  }
}
