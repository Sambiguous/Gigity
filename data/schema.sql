USE gigity_db;

DROP TABLE IF EXISTS freelancers;

CREATE TABLE freelancers(
    id INT AUTO_INCREMENT NOT NULL,
    acc_type BOOLEAN NOT NULL,
    f_name VARCHAR(20) NOT NULL,
    l_name VARCHAR(20) NOT NULL,
    b_day DATE NOT NULL,
    rate DECIMAL(6, 2) NOT NULL,
    thing1 BOOLEAN DEFAULT 0,
    thing2 BOOLEAN DEFAULT 0,
    thing3 BOOLEAN DEFAULT 0,
    thing4 BOOLEAN DEFAULT 0
);