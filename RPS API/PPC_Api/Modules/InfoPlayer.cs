using Microsoft.AspNetCore.Mvc;
using PPC_Api.Modules;
using System.Collections.Generic;

namespace PPC_Api.Modules
{
    public class InfoPlayer 
    {
        public  string UserName { get; set; }
        public int WinRatio { get; set; }

        public int Numbrewin { get; set; }
        public int  NumOfGame { get; set; }


        public InfoPlayer() { }
        public InfoPlayer(string userName, int winRatio, int numOfGame, int numbrewin)
        {
            this.UserName = userName;
            this.WinRatio = Calculewinratio();
            this.NumOfGame = numOfGame;
            Numbrewin = numbrewin;
        }
        public InfoPlayer(string userName, int winRatio, int numOfGame) { 
            this.UserName = userName;
            this.WinRatio = Calculewinratio();
            this.NumOfGame = numOfGame;
        }


        public int Calculewinratio()
        {
           // need to catch /0 exption for working 
            if (Numbrewin != 0 && NumOfGame != 0)
            {
                this.WinRatio =  (this.Numbrewin   / NumOfGame )* 100;    
            } 
            return this.WinRatio;

        }


        // public string getInfoPlayer(){return $"{this.UserName} {this.WinRatio} {this.NumOfGame}";}
        // public string getUserName(){ return this.UserName;}
        // public int getWinRation(){ return this.WinRatio;}
        // public int getNumOfGame(){ return this.NumOfGame;}

    }
}