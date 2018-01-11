
USE gigity_DB;

INSERT INTO job_stats (descr) VALUES ('open');
INSERT INTO job_stats (descr) VALUES ('pending offer');
INSERT INTO job_stats (descr) VALUES ('in progress');
INSERT INTO job_stats (descr) VALUES ('completed');

INSERT INTO skill_types (descr) VALUES ('Front End Developer');
INSERT INTO skill_types (descr) VALUES ('Back End Developer');
INSERT INTO skill_types (descr) VALUES ('Data Scientist');
INSERT INTO skill_types (descr) VALUES ('IT');

INSERT INTO users (user_email, user_password, user_type) VALUES ('john@f-society.com', 'DoJo1', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('j.smith@widgets.com', 'Bossy2', 'E');
INSERT INTO users (user_email, user_password, user_type) VALUES ('mary.marbles@yahoo.com', 'BigBlue', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('I.M.Oldman@geocities.com', 'Flashback', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('s-snowflake@snowblower.com', 'BringingJoy2', 'E');
INSERT INTO users (user_email, user_password, user_type) VALUES ('George@vandelay.com', 'FestivusNow', 'E');

INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (1, 'John', 'Doe', 'john@f-society.com', 'https://static.pexels.com/photos/92129/pexels-photo-92129.jpeg', 75.00, 'Able to blend in seamlessly to any office environment');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (3, 'Mary', 'Marbles', 'mary.marbles@yahoo.com', 'https://static.pexels.com/photos/746801/pexels-photo-746801.jpeg', 90.00, 'Always looking at the big picture');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (4, 'Ivan', 'Oldman', 'I.M.Old@geocities.com', 'https://static.pexels.com/photos/334029/pexels-photo-334029.jpeg', 55.00, 'I have years of programming experience');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (7, 'Ken', 'Adams', 'kadams@gmail.com', 'https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg', 60.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (8, 'Regina', 'Phalange', 'reginap@gmail.com', 'https://static.pexels.com/photos/206445/pexels-photo-206445.jpeg', 100.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (9, 'Ben', 'Wyatt', 'bwyatt@cityofpawnee.com', 'https://static.pexels.com/photos/450214/pexels-photo-450214.jpeg', 75.00, '');


INSERT INTO employers (user_id, first_name, last_name, email, company) VALUES (2, 'Jeff', 'Smith', 'j.smith@widgets.com', 'Widgets R Us');
INSERT INTO employers (user_id, first_name, last_name, email, company) VALUES (5, 'Suzy', 'Snowflake', 's-snowflake@snowblower.com', 'Snowblower Central');
INSERT INTO employers (user_id, first_name, last_name, email, company) VALUES (6, 'George', 'Alexander', 'George@vandelay.com', 'Vandelay Industries');

INSERT INTO freelancer_skills (user_id, skill_id) VALUES (1, 1);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (1, 2);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (3, 1);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (3, 2);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (3, 3);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (3, 4);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (4, 3);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (4, 4);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (7, 4);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (8, 2);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (9, 2);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (9, 3);


INSERT INTO jobs (employer_id, freelancer_id, job_descr, job_status) VALUES (2, 1, 'Create storefront for dark web sales', 4);
INSERT INTO jobs (employer_id, job_descr) VALUES (2, 'Create email template');

INSERT INTO reviews (job_id, reviewer_id, reviewee_id, rating, review) VALUES (1, 1, 2, 5, 'No direct contact, paid in bitcoin');