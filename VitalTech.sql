use integrador6;
show tables;
select * from vitalsigns;
DELETE FROM user;
create table users(
id int auto_increment primary key,
name varchar(100) not null,
email varchar(100) not null,
password varchar(100) not null
);

CREATE TABLE vitalSigns (
  id INT AUTO_INCREMENT PRIMARY KEY,
  heart_rate INT NOT NULL,
  systolic_pressure INT NOT NULL,
  diastolic_pressure INT NOT NULL,
  blood_oxygen INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

show tables;
TRUNCATE TABLE user;
select * from user;
SELECT v.* FROM `vitalsigns` v;
DROP TABLE vitalsigns; 