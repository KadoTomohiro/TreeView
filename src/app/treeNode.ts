import { Tree } from '@angular/router/src/utils/tree';

export class TreeNode {
  name: string;
  nodes?: TreeNode[];

  constructor(nodeName: string) {
    this.name = nodeName;
  }

  get isLeaf(): boolean {
    return !this.nodes;
  }

  add(newNodeName: string) {
    if (this.isLeaf) {
      this.nodes = [];
    }

    const newChild = new TreeNode(newNodeName);

    if (this.existChild(newChild)) {
      // throw new AlreadyExistError();
    }
    this.nodes.push(newChild);
  }

  remove(deleteNode: TreeNode) {
    if (this.isLeaf) {
      return;
    }
    const index = this.findChild(deleteNode);
    console.log(index);
    console.log(this.nodes[index]);

    this.nodes.splice(index, 1);
  }

  existChild(findNode: TreeNode): boolean {
    return this.nodes.some(this.isSome(findNode));
  }

  findChild(findNode: TreeNode): number {
    return this.nodes.findIndex(this.isSome(findNode));
  }

  isSome (compareNode: TreeNode): (node: TreeNode) => boolean {
    return (node: TreeNode) => node.name === compareNode.name;
  }
}

export class AlreadyExistError implements Error {
  name: string;
  message: string;

  constructor() {
    this.name = 'AlreadyExistError';
    this.message = 'Child Node is Already Exist';
  }
}
