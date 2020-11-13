using System.Collections.Generic;
using System;

namespace PPC_Api.Modules
{
    public class LeaderBorde 
    {
        

        public List<InfoPlayer> InfoPlayer { get; set ; }


        public LeaderBorde(List<InfoPlayer> infoPlayer)
        {
            this.InfoPlayer = infoPlayer;
        }

        public LeaderBorde(){}

    }
}