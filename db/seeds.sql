
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
INSERT INTO users (user_email, user_password, user_type) VALUES ('kadams@gmail.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('reginap@gmail.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('bwyatt@cityofpawnee.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('wtruman@yahoo.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('cday@hotmail.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('mrichards@gmail.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('dee@iasip.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('justjack@gmail.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('lknope@cityofpawnee.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('gob@bluthsbananas.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('rachel@gmail.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('giggity@gmail.com', 'pass', 'F');
INSERT INTO users (user_email, user_password, user_type) VALUES ('cyork@nyc.com', 'pass', 'F');


INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (1, 'John', 'Doe', 'john@f-society.com', 'https://static.pexels.com/photos/92129/pexels-photo-92129.jpeg', 75.00, 'Able to blend in seamlessly to any office environment');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (3, 'Mary', 'Marbles', 'mary.marbles@yahoo.com', 'https://static.pexels.com/photos/746801/pexels-photo-746801.jpeg', 90.00, 'Always looking at the big picture');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (4, 'Ivan', 'Oldman', 'I.M.Old@geocities.com', 'https://static.pexels.com/photos/334029/pexels-photo-334029.jpeg', 55.00, 'I have years of programming experience');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (7, 'Ken', 'Adams', 'kadams@gmail.com', 'https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg', 60.00, 'I love hiking, dancing, jogging, and coding!');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (8, 'Regina', 'Phalange', 'reginap@gmail.com', 'https://static.pexels.com/photos/206445/pexels-photo-206445.jpeg', 100.00, 'Im a leo and a professional bootstrapper!');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (9, 'Ben', 'Wyatt', 'bwyatt@cityofpawnee.com', 'https://static.pexels.com/photos/450214/pexels-photo-450214.jpeg', 75.00, 'Love my dog, my wife, and jQuery');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (10, 'Will', 'Truman', 'wtruman@yahoo.com', 'https://static.pexels.com/photos/375880/pexels-photo-375880.jpeg', 50.00, 'I got you for the low');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (11, 'Charlie', 'Day', 'cday@hotmail.com', 'https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg', 90.00, 'Love working with JavaScript!');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (12, 'Cosmo', 'Kramer', 'mrichards@gmail.com', 'https://static.pexels.com/photos/428341/pexels-photo-428341.jpeg', 45.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (13, 'Dee', 'Reynolds', 'dee@iasip.com', 'https://static.pexels.com/photos/539727/pexels-photo-539727.jpeg', 50.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (14, 'Jack', 'McFarland', 'justjack@gmail.com', 'https://static.pexels.com/photos/724889/pexels-photo-724889.png', 75.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (15, 'Leslie', 'Knope', 'lknope@cityofpawnee.com', 'https://static.pexels.com/photos/407237/pexels-photo-407237.jpeg', 80.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (16, 'Gob', 'Bluth', 'gob@bluthsbananas.com', 'https://static.pexels.com/photos/462680/pexels-photo-462680.jpeg', 120.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (17, 'Rachel', 'Green', 'rachel@gmail.com', 'https://static.pexels.com/photos/295564/pexels-photo-295564.jpeg', 65.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (18, 'Glenn', 'Quagmire', 'giggity@gmail.com', 'https://static.pexels.com/photos/7066/man-relax-couch-study.jpg', 75.00, '');
INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (19, 'Charlotte', 'York', 'cyork@nyc.com', 'https://static.pexels.com/photos/253758/pexels-photo-253758.jpeg', 80.00, '');


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
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (10, 1);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (11, 3);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (12, 4);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (13, 2);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (14, 3);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (15, 1);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (15, 2);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (16, 1);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (17, 4);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (18, 3);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (18, 4);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (19, 2);

INSERT INTO jobs (employer_id, freelancer_id, job_descr, job_status) VALUES (2, 1, 'Create storefront for dark web sales', 4);
INSERT INTO jobs (employer_id, job_descr) VALUES (2, 'Create email template');

INSERT INTO reviews (job_id, reviewer_id, reviewee_id, rating, review) VALUES (1, 1, 2, 3, 'No direct contact, paid in bitcoin');
INSERT INTO reviews (job_id, reviewer_id, reviewee_id, rating, review) VALUES (2, 2, 1, 5, 'Excelent worker. Delivered what he promised on time and with no problems. I would hire him again.');
