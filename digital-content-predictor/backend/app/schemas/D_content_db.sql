DROP DATABASE IF EXISTS digital_content_engagement_db;
CREATE DATABASE IF NOT EXISTS digital_content_engagement_db;
USE digital_content_engagement_db;

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ProductCategory (
	product_category_id INT AUTO_INCREMENT PRIMARY KEY,
	product_category_name VARCHAR(50) NOT NULL
);

CREATE TABLE Interest (
	interest_id INT AUTO_INCREMENT PRIMARY KEY,
	interest_name VARCHAR(50) NOT NULL
);

CREATE TABLE Plan (
	plan_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT NOT NULL,
	plan_purpose ENUM('Content Creator', 'Business', 'Existing Content') NOT NULL,
	product_name VARCHAR(255) NOT NULL,
	product_category_id INT NOT NULL,
	product_description VARCHAR(255),
	demographics_age ENUM ('Teenager', 'Adult', 'Middle Age', 'Senior', 'Elder'),
	demographics_gender ENUM ('Women', 'Men', 'All'),
	audience_description VARCHAR(255),
	plan_goal ENUM('Reach', 'Sales', 'Followers', 'Awareness'),
	plan_channel ENUM ('TikTok', 'Instagram', 'Facebook'),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
	FOREIGN KEY (product_category_id) REFERENCES ProductCategory(product_category_id) ON DELETE CASCADE
);

CREATE TABLE PlanInterest (
	plan_interest_id INT AUTO_INCREMENT PRIMARY KEY,
	plan_id INT NOT NULL,
	interest_id INT NOT NULL,
	FOREIGN KEY (plan_id) REFERENCES Plan(plan_id) ON DELETE CASCADE,
	FOREIGN KEY (interest_id) REFERENCES Interest(interest_id) ON DELETE CASCADE
);

CREATE TABLE SavedPlan (
	saved_plan_id INT AUTO_INCREMENT PRIMARY key,
    user_id INT NOT NULL,
    plan_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    FOREIGN KEY (plan_id) REFERENCES Plan(plan_id) ON DELETE CASCADE
);


  