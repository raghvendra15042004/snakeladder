# snakeladder
/*
  #include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int random(int min, int max)
{
	static bool isFirst = true;
	if(isFirst)
	{
		srand(static_cast<unsigned int>(time(0)));
		isFirst = false;
	}
	return min + rand() % (max - min + 1);
}

int dice()
{
	return random(1, 6);
}

int main()
{
	int ladder[] = {5, 20, 35, 50, 65, 80, 90};
	int snake[] = {15, 25, 37, 52, 68, 85, 98};
	int board = 100;
	int maxPlayer = 2;
	bool gameOver = false;
	int current[maxPlayer] = {0};
	int player = 0;
	
	while(!gameOver)
	{
		system("cls");
		cout << "Snake and Ladder Game!!" << endl;
		cout << "Current Player " << player + 1 << endl;
		cout << "========================" << endl;
		for(int i = 0; i < maxPlayer; i++)
		{
			cout << "Player " << i + 1 << " is at position " << current[i] << endl;
		}
		cout << "========================" << endl;
		int roll = dice();
		cout << "Player " << player + 1 << " rolled a " << roll << endl;
		current[player] += roll;
		if(current[player] >= board)
		{
			cout << "Player " << player + 1 << " wins!" << endl << endl;
			gameOver = true;
			break;
		}
		 
		for(int i = 0; i < sizeof(ladder) / sizeof(ladder[0]); i++)
		{
			if(current[player] == ladder[i])
			{
				cout << "Player " << player + 1 << " climbed a ladder to position " << ladder[i] + dice() << endl;
				current[player] += dice();
			}
		}
		
		for(int i = 0; i < sizeof(snake) / sizeof(snake[0]); i++)
		{
			if(current[player] == snake[i])
			{
				int bite = dice();
				cout << "Player " << player + 1 << " is bitten by a snake and goes back " << bite << " positions." << endl;
				current[player] -= bite;
			}
		}
		player = (player + 1) % maxPlayer;
		system("pause");
	}
}

*/
