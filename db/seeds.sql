
USE gigity_DB;

INSERT INTO job_stats (descr) VALUES ('open');
INSERT INTO job_stats (descr) VALUES ('pending offer');
INSERT INTO job_stats (descr) VALUES ('in progress');
INSERT INTO job_stats (descr) VALUES ('completed');

INSERT INTO skill_types (descr) VALUES ('Front End Developer');
INSERT INTO skill_types (descr) VALUES ('Back End Developer');
INSERT INTO skill_types (descr) VALUES ('Data Scientist');
INSERT INTO skill_types (descr) VALUES ('IT');

INSERT INTO users (username, userpassword, user_type) VALUES ('JohnDoe', 'DoJo1', 'F');
INSERT INTO users (username, userpassword, user_type) VALUES ('BossMan', 'Bossy2', 'E');

INSERT INTO freelancers (freelancer_id, first_name, last_name, email, phone, photo, rate, bio) VALUES (1, 'John', 'Doe', 'john@f-society.com', '555/555-5555', 'https://static.pexels.com/photos/92129/pexels-photo-92129.jpeg', 75.00, 'Able to blend in seamlessly to any office environment');

INSERT INTO employers (employer_id, first_name, last_name, email, company) VALUES (2, 'Jeff', 'Smith', 'j.smith@widgets.com', 'Widgets R Us');

INSERT INTO freelancer_skills (freelancer_id, skill_id, skill_status) VALUES (1, 1, true);
INSERT INTO freelancer_skills (freelancer_id, skill_id, skill_status) VALUES (1, 4, true);

INSERT INTO jobs (employer_id, job_descr, job_status) VALUES (2, 'Create storefront for dark web sales', 1);

INSERT INTO reviews (reviewer_id, reviewee_id, rating, review) VALUES (1, 2, 5, 'No direct contact, paid in bitcoin');