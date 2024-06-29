CREATE SCHEMA IF NOT EXISTS hortapp_db;

USE hortapp_db;

create table if not exists gardens
(
	garden_id varchar(32) default (upper(concat(substr(md5(rand()),1,8),substr(md5(rand()),1,8)))) null,
	first_plant varchar(32) null,
	first_plant_moisture_value float null,
	first_plant_temperature_value float null,
	light_value float null,
	second_plant varchar(32) null,
	second_plant_moisture_value float null,
	second_plant_temperature_value float null,
	third_plant varchar(32) null,
	third_plant_moisture_value float null,
	third_plant_temperature_value float null,
	timestamp timestamp default ((utc_timestamp() - interval 3 hour)) null,
	constraint garden_id unique (garden_id)
);

create table if not exists user_gardens
(
	id int unsigned auto_increment primary key,
	user_id varchar(40) null,
	garden_id varchar(40) null
);

