select * from street join city on street.city = city.cityid

select * from users
select * from student
select * from parent
select * from parents_students
insert into parents_students values ('38D6F8DC-A858-47EF-B48A-415C5EAB4C47','D94DF29F-BA21-410A-96A2-4309FA75E7FE')
insert into parents_students values ('A06EE9DC-3C44-4554-9543-0B7BB7876FB9','D94DF29F-BA21-410A-96A2-4309FA75E7FE')
insert into parents_students values ('D94DF29F-BA21-410A-96A2-4309FA75E7FE', '38D6F8DC-A858-47EF-B48A-415C5EAB4C47')
insert into parents_students values ('D94DF29F-BA21-410A-96A2-4309FA75E7FE', 'A06EE9DC-3C44-4554-9543-0B7BB7876FB9')
select * from classgroup
select * from teacher
select * from school
select * from subject
select * from subjects_teachers
insert into subjects_teachers values ('1C1EA3D1-7560-4E2D-B1F7-151C450424CA', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
insert into subjects_teachers values ('B76FFA96-E0EE-4060-BE6F-0D1AA745F504', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
insert into subjects_teachers values ('6B0BF4AE-731E-4461-AFE0-6BAC91603E04', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
insert into subjects_teachers values ('143A85CC-C346-4516-A5FA-86FCCE6F91A7', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
insert into subjects_teachers values ('6684947D-DD8F-462B-82E6-A722AB4D2149', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
insert into subjects_teachers values ('1645AD99-4883-40B9-B56C-75AC6E6AD452', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
insert into subjects_teachers values ('DB344E5E-CA83-437A-A579-C2571E74C2CC', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
insert into subjects_teachers values ('0863D983-8326-49FD-A79D-EA4D8B02101E', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
select * from curriculum
select * from period
select * from remark
select * from absence
select * from period
select * from grade
insert into grade values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', '0863D983-8326-49FD-A79D-EA4D8B02101E', 5, 2021, 1)
insert into grade values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', '1645AD99-4883-40B9-B56C-75AC6E6AD452', 5, 2021, 1)
insert into grade values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 'DB344E5E-CA83-437A-A579-C2571E74C2CC', 5, 2021, 1)
insert into grade values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', '1C1EA3D1-7560-4E2D-B1F7-151C450424CA', 4, 2021, 1)
insert into grade values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', '6B0BF4AE-731E-4461-AFE0-6BAC91603E04', 5, 2021, 1)
insert into grade values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', '143A85CC-C346-4516-A5FA-86FCCE6F91A7', 5, 2021, 1)
insert into grade values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', '6684947D-DD8F-462B-82E6-A722AB4D2149', 5, 2021, 1)
insert into grade values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 'B76FFA96-E0EE-4060-BE6F-0D1AA745F504', 5, 2021, 1)
insert into absence values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', 1, '28063138-9212-43FC-897C-5B5B670E83A3', '2021-11-29')
insert into absence values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', 1, 'D34BCC8A-3FE6-4638-9708-AA6C6CF9146B', '2021-11-29')
insert into absence values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', 1, '9588A68A-1960-48D8-AFA4-FB1EDA992EFE' , '2021-11-29')
insert into absence values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47', 0, '3B1A0603-44DD-4F7F-B49C-ED89E19FE2C3' , '2021-11-30')
delete from remark where remarkid = '8A7C4BE4-29B6-45F2-9EBB-53370EC6CFBF'
insert into remark values (newid(), '38D6F8DC-A858-47EF-B48A-415C5EAB4C47' , '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', '2021-12-15', 'Negrita dhe Kosova vazhdimisht flisnin gjatë orës.')
insert into remark values (newid(), 'A06EE9DC-3C44-4554-9543-0B7BB7876FB9' , '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', '2021-12-15', 'Negrita dhe Kosova vazhdimisht flisnin gjatë orës.')
insert into period values (newid(), 1, 'E Hënë', '1C1EA3D1-7560-4E2D-B1F7-151C450424CA', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 2, 'E Hënë', '6B0BF4AE-731E-4461-AFE0-6BAC91603E04', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 3, 'E Hënë', 'B76FFA96-E0EE-4060-BE6F-0D1AA745F504', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 4, 'E Hënë', '6684947D-DD8F-462B-82E6-A722AB4D2149', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 1, 'E Martë', 'DB344E5E-CA83-437A-A579-C2571E74C2CC', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 2, 'E Martë', '6B0BF4AE-731E-4461-AFE0-6BAC91603E04', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 3, 'E Martë', '143A85CC-C346-4516-A5FA-86FCCE6F91A7', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 4, 'E Martë', '0863D983-8326-49FD-A79D-EA4D8B02101E', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 1, 'E Mërkurë', '6B0BF4AE-731E-4461-AFE0-6BAC91603E04', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 2, 'E Mërkurë', 'B76FFA96-E0EE-4060-BE6F-0D1AA745F504', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 3, 'E Mërkurë', '1645AD99-4883-40B9-B56C-75AC6E6AD452', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 4, 'E Mërkurë', '1C1EA3D1-7560-4E2D-B1F7-151C450424CA', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 5, 'E Mërkurë', '143A85CC-C346-4516-A5FA-86FCCE6F91A7', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 1, 'E Enjte', 'B76FFA96-E0EE-4060-BE6F-0D1AA745F504', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 2, 'E Enjte', '6B0BF4AE-731E-4461-AFE0-6BAC91603E04', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 3, 'E Enjte', 'DB344E5E-CA83-437A-A579-C2571E74C2CC', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 4, 'E Enjte', '0863D983-8326-49FD-A79D-EA4D8B02101E', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 1, 'E Premte', '1645AD99-4883-40B9-B56C-75AC6E6AD452', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 2, 'E Premte', '6684947D-DD8F-462B-82E6-A722AB4D2149', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 3, 'E Premte', '6B0BF4AE-731E-4461-AFE0-6BAC91603E04', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')
insert into period values (newid(), 4, 'E Premte', '1C1EA3D1-7560-4E2D-B1F7-151C450424CA', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D', 2021, '0E316EA3-99F1-41E1-B298-79B01476D8CD')

select * from article
insert into article values (newid(), 'Shkolla me mësues të ri', 'Mësuesi i ri Endrit Jajaga i shtohet stafit të mrekullueshëm të shkollës duke filluar në javët e para të Marsit.', '2022-1-15', null,  'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')
insert into article values (newid(), 'Banjot do të rinovohen së shpejti', 'Pas shumë kërkesave, banjot do të rinovohen brenda muajit Shkurt.', '2022-1-14', null,  'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')
insert into article values (newid(), 'Mbledhja e ardhshme e prindërve', 'Presim nga prindërit të participojnë në këtë evaluim të rregullt. Data e mbajtjes është 12 Janar, 2022!', '2022-1-8', null,  'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')
insert into article values (newid(), 'Shpallja e notave për semestrin e parë 2021/2022', 'Notat e semestrit janë shpallur dhe janë të qasshme në sistem. Kontaktoni kujdestarët e klasëve për çfarëdo pyetje që mund të keni!', '2021-12-21', null,  'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')

select * from schedule
insert into schedule values(newid(), 'Pasdite', '963DE40B-C5DD-4850-BCEB-EE79E99054FA' ,'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')
--hysni zajmi id : FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D
--rr. amerika : 80AB9654-64E4-4E58-B631-CC54C2BEC4FD
--rr. Teuta vrelle : 3063DCCE-FF3F-453F-B1E0-DC7B2024D34E
--rr. ademaj, studenice : DED46220-73DF-40DB-9CCE-517DCE3E019B
--rr. hajdari, studenice : C4803676-DA47-4BFF-93EE-7C794BF261AE
--rr. Teuta, istog : E16911E3-3671-4A3D-9144-E14BDA1375AF
select * from subjects_teachers
select * from subject
select users.userid, users.name, users.surname from users join teacher on users.userid = teacher.teacherid
group by users.userid, users.name, users.surname, teacher.teachercategory
having teacher.teachercategory = 'Mësues'

insert into subjects_teachers values

update city
set cityname = 'Banjë'
where cityname = 'Banjë e Pejës'

select * from parent

declare @id uniqueidentifier = (select newid())
--insert into subject values (newid(), 'Edukatë Fizike III', '0B17CDCE-F684-4754-AB90-9AF702B1658A')
--insert into curriculum values (@id, 9, 'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')
insert into users values (@id, 'Osman', 'Ramqaj', '80AB9654-64E4-4E58-B631-CC54C2BEC4FD', 'M', '1992-2-2', null, null)
insert into parent values (@id, '+383 44 102 224')
insert into student values (@id, '963DE40B-C5DD-4850-BCEB-EE79E99054FA', 'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')
--insert into classgroup values (@id, 'III - 3', 3, 'A0D05154-E856-482A-BD38-7DEE1D596887', '5CEFFE44-201F-4B49-A7BD-351EAF9CFF6D')
--insert into teacher values (@id, 'Master', null, 'Mësues', 'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')
--insert into classroom values(@id, 'V-4', 30, 'FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D')
insert into users values (@id, 'Rilind', 'Bicaj', 'AE630BCC-19EA-4BAB-A2EE-4F39C723649B', 'M', '2000-12-22', null, null)
--insert into student values(@id, )
--insert into street values (@id, 'Rruga Amerika', 'E0E59EDE-2165-423A-B542-AFF431010FEA')
--insert into city values(@id, 'Studenicë e Istogut', '0F5332C0-18CC-41D7-81D7-E5BF7A9DEAF0')

select * from classroom
select * from classgroup
i
select * from school
select* from schedule