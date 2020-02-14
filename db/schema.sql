drop database if exists peer_up_db;
create database peer_up_db;
use peer_up_db;

create table skills (
    ID int not null AUTO_INCREMENT,
    subject varchar(255),
    primary key (ID)
);