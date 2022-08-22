// C++ program to print Postorder traversal from given
// Inorder and Preorder traversals.
#include <bits/stdc++.h>
using namespace std;

int postIndex = 0;

// A utility function to search data in in[]
int search(int in[], int data, int n)
{
    int i = 0;
    for (i = 0; i < n; i++)
        if (in[i] == data)
            return i;
    return i;
}

// Fills preorder traversal of tree with given
// inorder and postorder traversals in a stack
void fillPre(int in[], int post[], int inStrt,
             int inEnd, stack<int> &s, int n)
{
    if (inStrt > inEnd)
        return;

    // Find index of next item in postorder traversal in
    // inorder.
    int val = post[postIndex];
    int inIndex = search(in, val, n);
    postIndex--;

    // traverse right tree
    fillPre(in, post, inIndex + 1, inEnd, s, n);

    // traverse left tree
    fillPre(in, post, inStrt, inIndex - 1, s, n);

    s.push(val);
}

// This function basically initializes postIndex
// as last element index, then fills stack with
// reverse preorder traversal using printPre
void printPreMain(int in[], int post[], int n)
{
    int len = n;
    postIndex = len - 1;
    stack<int> s;
    fillPre(in, post, 0, len - 1, s, n);
    while (s.size() > 0)
    {
        cout << s.top() << " ";
        s.pop();
    }
}

// Driver code
int main()
{
    int in[] = {7, 11, 5, 1, 3, 8, 13, 94, 26, 12, 10};
    int post[] = {7, 1, 3, 5, 8, 11, 2, 4, 6, 9, 10, 12, 13};
    int n = sizeof(in) / sizeof(int);
    printPreMain(in, post, n);
}

// This code is contributed by Arnab Kundu
