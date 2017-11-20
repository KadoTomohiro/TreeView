import { TreeNode } from './treeNode';

describe('treeNode test', () => {

  let testNode: TreeNode;

  beforeEach(() => {
    testNode = new TreeNode('root');
  });

  it('should create the instance', () => {
    expect(testNode.name).toEqual('root');
  });

  it('add test', () => {
    testNode.add('leaf1');
    testNode.add('leaf2');

    expect(testNode.nodes.length).toEqual(2);
    expect(testNode.nodes[0].name).toEqual('leaf1');
    expect(testNode.nodes[1].name).toEqual('leaf2');

    testNode.nodes[0].add('leaf1-1');

    expect(testNode.nodes[0].isLeaf).toBeFalsy();
    expect(testNode.nodes[1].isLeaf).toBeTruthy();
  });

  it('remove test', () => {
    testNode.add('leaf1');

    testNode.remove(testNode.nodes[0]);
    expect(testNode.nodes.length).toEqual(0);
  });

});
