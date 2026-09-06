DROP DATABASE IF EXISTS digital_content_engagement_db;
CREATE DATABASE IF NOT EXISTS digital_content_engagement_db;
USE digital_content_engagement_db;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Plan (
    plan_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    plan_purpose ENUM('Content Creator', 'Business', 'Existing Content') NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_category VARCHAR(50) NOT NULL,
    product_description VARCHAR(255),
    demographics_age VARCHAR(24) NOT NULL,
    demographics_gender ENUM('Women', 'Men', 'All'),
    audience_description VARCHAR(255),
    plan_goal VARCHAR(24) NOT NULL,
    plan_channel ENUM('TikTok', 'Instagram', 'Facebook'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE SavedPlan (
    saved_plan_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    plan_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (plan_id) REFERENCES Plan(plan_id) ON DELETE CASCADE
);

CREATE TABLE Interest (
    interest_id INT AUTO_INCREMENT PRIMARY KEY,
    interest_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE PlanInterest (
    plan_id INT NOT NULL,
    interest_id INT NOT NULL,
    PRIMARY KEY (plan_id, interest_id),
    FOREIGN KEY (plan_id) REFERENCES Plan(plan_id) ON DELETE CASCADE,
    FOREIGN KEY (interest_id) REFERENCES Interest(interest_id) ON DELETE CASCADE
);

