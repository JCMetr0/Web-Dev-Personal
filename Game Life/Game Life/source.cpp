#include <iostream>
#include <string>

using namespace std;


int main() {

	int hitpoints;
	cout << "Enter your HP >> ";
	cin >> hitpoints;

	string status = (hitpoints <= 0) ? "Defeated" : "Alive";

	cout << "Player is " << status << endl;

	return 0;
	


}