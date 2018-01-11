
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

INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate, bio) VALUES (1, 'John', 'Doe', 'john@f-society.com', 'https://static.pexels.com/photos/92129/pexels-photo-92129.jpeg', 75.00, 'Able to blend in seamlessly to any office environment');

INSERT INTO employers (user_id, first_name, last_name, email, company) VALUES (2, 'Jeff', 'Smith', 'j.smith@widgets.com', 'Widgets R Us');

INSERT INTO freelancer_skills (user_id, skill_id) VALUES (1, 1);
INSERT INTO freelancer_skills (user_id, skill_id) VALUES (1, 4);

INSERT INTO jobs (employer_id, freelancer_id, job_descr, job_status) VALUES (2, 1, 'Create storefront for dark web sales', 4);
INSERT INTO jobs (employer_id, job_descr) VALUES (2, 'Create email template');

INSERT INTO reviews (job_id, reviewer_id, reviewee_id, rating, review) VALUES (1, 1, 2, 5, 'No direct contact, paid in bitcoin');