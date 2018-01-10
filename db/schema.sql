### Schema
DROP DATABASE IF EXISTS gigity_DB;
CREATE DATABASE gigity_DB;
USE gigity_DB;

CREATE TABLE users
(
	user_id INT NOT NULL AUTO_INCREMENT,
	user_email VARCHAR(100) NOT NULL,
	user_password VARCHAR(45) NOT NULL,
    user_type TINYTEXT NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE freelancers
(
	frl_id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
	first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    rate DECIMAL(6,2),
	bio LONGTEXT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
    PRIMARY KEY (frl_id)
);

CREATE TABLE skill_types
(
	type_id INT NOT NULL AUTO_INCREMENT,
    descr VARCHAR(100) NOT NULL,
    PRIMARY KEY (type_id)
);


CREATE TABLE freelancer_skills
(
	fls_id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    skill_id INT,
    skill_status BOOLEAN DEFAULT TRUE,
    FOREIGN KEY(user_id) REFERENCES freelancers(user_id),
    FOREIGN KEY(skill_id) REFERENCES skill_types(type_id),
    PRIMARY KEY (fls_id) 
);


CREATE TABLE employers
(
	emp_id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
	first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    company VARCHAR(255),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
	PRIMARY KEY (emp_id)
);

CREATE TABLE job_stats
(
	status_id INT NOT NULL AUTO_INCREMENT,
    descr VARCHAR(25) NOT NULL,
    PRIMARY KEY (status_id)
);

CREATE TABLE jobs
(
	job_id INT NOT NULL AUTO_INCREMENT, 
	employer_id INT,
    freelancer_id INT,
    job_descr LONGTEXT,
    job_status INT DEFAULT 1,
    FOREIGN KEY(employer_id) REFERENCES employers(emp_id),
	FOREIGN KEY(freelancer_id) REFERENCES freelancers(frl_id),
    FOREIGN KEY(job_status) REFERENCES job_stats(status_id),
	PRIMARY KEY (job_id)
);

CREATE TABLE reviews
(
	review_id INT NOT NULL AUTO_INCREMENT, 
    job_id INT,
    reviewer_id INT,
    reviewee_id INT,
    rating TINYINT,
    review LONGTEXT,
	FOREIGN KEY(job_id) REFERENCES jobs(job_id),
    FOREIGN KEY(reviewer_id) REFERENCES users(user_id),
	FOREIGN KEY(reviewee_id) REFERENCES users(user_id),
	PRIMARY KEY (review_id)
);
/*
CREATE TABLE messages
(
	message_id INT NOT NULL AUTO_INCREMENT, 
	message_to INT,
    message_from INT,
    message LONGTEXT,
    FOREIGN KEY(message_to) REFERENCES users(user_id),
	FOREIGN KEY(message_from) REFERENCES users(user_id),
	PRIMARY KEY (message_id)
);
*/