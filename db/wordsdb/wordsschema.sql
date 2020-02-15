drop database if exists words_db;
create database words_db;
use words_db;

create table descriptors (
    ID int not null AUTO_INCREMENT,
    word varchar(255),
    primary key(ID)
);

create table animals (
    ID int not null AUTO_INCREMENT,
    animal_name varchar(255),
    primary key (ID)
);
