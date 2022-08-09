#include<bits/stdc++.h>

using namespace std;

// class Base{
//     public:
//         virtual void show() = 0;
//         virtual void print() = 0;
// };

// class Derive: public Base{
//     public:
//         void show(){
//             cout<<"Show Function in Derived class called";
//         }
// };

// class A {
//     public:
//      ~A(){
//         cout<<"A ";
//      }
// };

// class B: public A {
//     public:
//         ~B(){
//             cout<<"B ";
//         }
// };

// void test(){
//     B b;
//     cout<<"test ";
// };

class myEx
{ 
    public:
        myEx(string amsg){
            emsg = amsg;
        }

        string what(){
            return emsg;
        }

    private:
        string emsg;
};
int main(){
    // cout<<"hello Vikrant !";
    // Base *basePtr = new Derive();
    // delete basePtr;

    // Base obj;
    // Base *b;
    // Derive d;
    // b = &d;
    // b->show();
    // test();
    try{
        throw myEx("Default Message");
    }
    catch(exception e){
        cout<<e.what()<<"\n";
    }
    return 0;
}