-- DROP DATABASE IF EXISTS RPS_DataBase;
-- CREATE DATABASE RPS_DataBase

-- release 2.0
USE RPS_DataBase

DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Turn;

CREATE TABLE Player(
    USERNAME NVARCHAR(50),
    PRIMARY KEY(USERNAME)
);

CREATE  TABLE Game(
    USERNAME        NVARCHAR(50),
    DateStart       DATETIME,
    DateFinish      DATETIME,
    NumbreOfTurn    INT,

    PRIMARY KEY( USERNAME, DateStart),  
    FOREIGN KEY( USERNAME) REFERENCES Player
);

CREATE TABLE Turn(
    USERNAME        NVARCHAR(50),
    DateStart       DATETIME,
    TurnNum         INT,
    PlayerChoise    NVARCHAR(8) CHECK(PlayerChoise IN ('Rock', 'Paper', 'Scissors')),
    Aichoose        NVARCHAR(8) CHECK(Aichoose IN ('Rock', 'Paper', 'Scissors')),
    Result          NVARCHAR(22) CHECK(Result in ('This is a Draw', 'You Win Congradulation', 'You loose')),


    PRIMARY KEY ( USERNAME, DateStart),
    FOREIGN KEY( USERNAME, DateStart ) REFERENCES Game
); 

