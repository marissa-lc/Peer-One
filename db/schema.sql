drop database if exists peer_up_db;

create database peer_up_db;

use peer_up_db;

create table users (
    ID int not null AUTO_INCREMENT,
    username varchar(255) not null unique,
    email varchar(255) not null unique,
    password varchar(255) not null,
    primary key(ID)
);

create table skills (
    ID int not null AUTO_INCREMENT,
    subject varchar(255) not null unique,
    primary key (ID)
);

create table user_skills (
    user_id int not null,
    skill_id int not null,
    primary key (user_id, skill_id),
    foreign key (user_id) references users(ID),
    foreign key (skill_id) references skills(ID)
);

create table posts (
    ID int not null AUTO_INCREMENT,
    body text,
    user_id int not null,
    skill_id int,
    reply_to_id int,
    primary key(ID),
    foreign key(user_id) references users(ID),
    foreign key(skill_id) references skills(ID),
    foreign key(reply_to_id) references posts(ID)
);
