use integrador6;
show tables;
select * from vitalsigns;
DELETE FROM user;
create table user(
id int auto_increment primary key,
name varchar(100) not null,
email varchar(100) not null,
password varchar(100) not null
);
show tables;