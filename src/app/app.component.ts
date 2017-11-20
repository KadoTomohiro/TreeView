import { Component } from '@angular/core';
import { TreeNode } from './treeNode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeData: TreeNode;

  constructor() {
    this.treeData = new TreeNode('root');
  }
}
