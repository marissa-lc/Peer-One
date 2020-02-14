use peer_up_db;

insert into users (username, email, password)
values ('user1', 'user1@address.com', 'pass'),
    ('user2', 'user2@address.com', 'pass'),
    ('user3', 'user3@address.com', 'pass');

insert into skills (subject)
values ('SQL'),('Node.JS'),('CSS'), ('JavaScript');

insert into posts (body, user_id, skill_id)
values ('Need help with SQL', 1, 1),
    ('Need help with Node', 2, 2),
    ('Need help with CSS', 3, 3);
