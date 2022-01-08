using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Models;

#nullable disable

namespace Persistence
{
    public partial class SKMSDatabaseContext : DbContext
    {
        public SKMSDatabaseContext()
        {
        }

        public SKMSDatabaseContext(DbContextOptions<SKMSDatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Absence> Absences { get; set; }
        public virtual DbSet<Administrator> Administrators { get; set; }
        public virtual DbSet<Article> Articles { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Classgroup> Classgroups { get; set; }
        public virtual DbSet<Classroom> Classrooms { get; set; }
        public virtual DbSet<Curriculum> Curricula { get; set; }
        public virtual DbSet<Eventcategory> Eventcategories { get; set; }
        public virtual DbSet<Grade> Grades { get; set; }
        public virtual DbSet<Parent> Parents { get; set; }
        public virtual DbSet<ParentsStudent> ParentsStudents { get; set; }
        public virtual DbSet<Period> Periods { get; set; }
        public virtual DbSet<Remark> Remarks { get; set; }
        public virtual DbSet<Schedule> Schedules { get; set; }
        public virtual DbSet<School> Schools { get; set; }
        public virtual DbSet<Schoolevent> Schoolevents { get; set; }
        public virtual DbSet<Street> Streets { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<SubjectsTeacher> SubjectsTeachers { get; set; }
        public virtual DbSet<Teacher> Teachers { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Absence>(entity =>
            {
                entity.ToTable("ABSENCE");

                entity.Property(e => e.AbsenceId)
                    .ValueGeneratedNever()
                    .HasColumnName("AbsenceID");

                entity.Property(e => e.DateMarked).HasColumnType("date");

                entity.Property(e => e.Reasoned)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.PeriodNavigation)
                    .WithMany(p => p.Absences)
                    .HasForeignKey(d => d.Period)
                    .HasConstraintName("FK__ABSENCE__Period__3E1D39E1");

                entity.HasOne(d => d.StudentNavigation)
                    .WithMany(p => p.Absences)
                    .HasForeignKey(d => d.Student)
                    .HasConstraintName("FK__ABSENCE__Student__3D2915A8");
            });

            modelBuilder.Entity<Administrator>(entity =>
            {
                entity.ToTable("ADMINISTRATOR");

                entity.Property(e => e.AdministratorId)
                    .ValueGeneratedNever()
                    .HasColumnName("AdministratorID");

                entity.Property(e => e.AcademicDegree)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.AdministratorNavigation)
                    .WithOne(p => p.Administrator)
                    .HasForeignKey<Administrator>(d => d.AdministratorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ADMINISTR__Admin__29572725");
            });

            modelBuilder.Entity<Article>(entity =>
            {
                entity.ToTable("ARTICLE");

                entity.Property(e => e.ArticleId)
                    .ValueGeneratedNever()
                    .HasColumnName("ArticleID");

                entity.Property(e => e.Contents)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DatePublished).HasColumnType("date");

                entity.Property(e => e.PictureUrl)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(75)
                    .IsUnicode(false);

                entity.HasOne(d => d.SchoolNavigation)
                    .WithMany(p => p.Articles)
                    .HasForeignKey(d => d.School)
                    .HasConstraintName("FK__ARTICLE__School__75A278F5");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("CITY");

                entity.Property(e => e.CityId)
                    .ValueGeneratedNever()
                    .HasColumnName("CityID");

                entity.Property(e => e.CityName)
                    .HasMaxLength(75)
                    .IsUnicode(false);

                entity.HasOne(d => d.MunicipalityNavigation)
                    .WithMany(p => p.InverseMunicipalityNavigation)
                    .HasForeignKey(d => d.Municipality)
                    .HasConstraintName("FK__CITY__Municipali__20C1E124");
            });

            modelBuilder.Entity<Classgroup>(entity =>
            {
                entity.HasKey(e => e.GroupId)
                    .HasName("PK__CLASSGRO__149AF30AA60D3BC2");

                entity.ToTable("CLASSGROUP");

                entity.HasIndex(e => e.HomeroomTeacher, "UQ__CLASSGRO__78BC72E65F2CB5CF")
                    .IsUnique();

                entity.Property(e => e.GroupId)
                    .ValueGeneratedNever()
                    .HasColumnName("GroupID");

                entity.Property(e => e.GroupName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.ClassroomNavigation)
                    .WithMany(p => p.Classgroups)
                    .HasForeignKey(d => d.Classroom)
                    .HasConstraintName("FK__CLASSGROU__Class__534D60F1");

                entity.HasOne(d => d.HomeroomTeacherNavigation)
                    .WithOne(p => p.Classgroup)
                    .HasForeignKey<Classgroup>(d => d.HomeroomTeacher)
                    .HasConstraintName("FK__CLASSGROU__Homer__5441852A");
            });

            modelBuilder.Entity<Classroom>(entity =>
            {
                entity.ToTable("CLASSROOM");

                entity.Property(e => e.ClassroomId)
                    .ValueGeneratedNever()
                    .HasColumnName("ClassroomID");

                entity.Property(e => e.ClassroomName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.SchoolNavigation)
                    .WithMany(p => p.Classrooms)
                    .HasForeignKey(d => d.School)
                    .HasConstraintName("FK__CLASSROOM__Schoo__3F466844");
            });

            modelBuilder.Entity<Curriculum>(entity =>
            {
                entity.ToTable("CURRICULUM");

                entity.Property(e => e.CurriculumId)
                    .ValueGeneratedNever()
                    .HasColumnName("CurriculumID");

                entity.HasOne(d => d.SchoolNavigation)
                    .WithMany(p => p.Curricula)
                    .HasForeignKey(d => d.School)
                    .HasConstraintName("FK__CURRICULU__Schoo__6477ECF3");
            });

            modelBuilder.Entity<Eventcategory>(entity =>
            {
                entity.HasKey(e => e.CategoryId)
                    .HasName("PK__EVENTCAT__19093A2B95D8088A");

                entity.ToTable("EVENTCATEGORY");

                entity.Property(e => e.CategoryId)
                    .ValueGeneratedNever()
                    .HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Grade>(entity =>
            {
                entity.ToTable("GRADE");

                entity.Property(e => e.GradeId)
                    .ValueGeneratedNever()
                    .HasColumnName("GradeID");

                entity.HasOne(d => d.StudentNavigation)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.Student)
                    .HasConstraintName("FK__GRADE__Student__395884C4");

                entity.HasOne(d => d.SubjectsTeacher)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => new { d.Teacher, d.Subject })
                    .HasConstraintName("FK__GRADE__3A4CA8FD");
            });

            modelBuilder.Entity<Parent>(entity =>
            {
                entity.ToTable("PARENT");

                entity.Property(e => e.ParentId)
                    .ValueGeneratedNever()
                    .HasColumnName("ParentID");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.ParentNavigation)
                    .WithOne(p => p.Parent)
                    .HasForeignKey<Parent>(d => d.ParentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PARENT__ParentID__5AEE82B9");
            });

            modelBuilder.Entity<ParentsStudent>(entity =>
            {
                entity.HasKey(e => new { e.StudentId, e.ParentId })
                    .HasName("PK__PARENTS___DFF6BF69BC82C4A4");

                entity.ToTable("PARENTS_STUDENTS");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.ParentId).HasColumnName("ParentID");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.ParentsStudents)
                    .HasForeignKey(d => d.ParentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PARENTS_S__Paren__5EBF139D");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.ParentsStudents)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PARENTS_S__Stude__5DCAEF64");
            });

            modelBuilder.Entity<Period>(entity =>
            {
                entity.ToTable("PERIOD");

                entity.Property(e => e.PeriodId)
                    .ValueGeneratedNever()
                    .HasColumnName("PeriodID");

                entity.Property(e => e.DayOfTheWeek)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Slot)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.HasOne(d => d.ScheduleNavigation)
                    .WithMany(p => p.Periods)
                    .HasForeignKey(d => d.Schedule)
                    .HasConstraintName("FK__PERIOD__Schedule__71D1E811");

                entity.HasOne(d => d.SubjectsTeacher)
                    .WithMany(p => p.Periods)
                    .HasForeignKey(d => new { d.Subject, d.Teacher })
                    .HasConstraintName("FK__PERIOD__72C60C4A");
            });

            modelBuilder.Entity<Remark>(entity =>
            {
                entity.ToTable("REMARK");

                entity.Property(e => e.RemarkId)
                    .ValueGeneratedNever()
                    .HasColumnName("RemarkID");

                entity.Property(e => e.Comment)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DateMarked).HasColumnType("date");

                entity.HasOne(d => d.StudentNavigation)
                    .WithMany(p => p.Remarks)
                    .HasForeignKey(d => d.Student)
                    .HasConstraintName("FK__REMARK__Student__40F9A68C");

                entity.HasOne(d => d.TeacherNavigation)
                    .WithMany(p => p.Remarks)
                    .HasForeignKey(d => d.Teacher)
                    .HasConstraintName("FK__REMARK__Teacher__41EDCAC5");
            });

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.ToTable("SCHEDULE");

                entity.Property(e => e.ScheduleId)
                    .ValueGeneratedNever()
                    .HasColumnName("ScheduleID");

                entity.Property(e => e.Timeslot)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.ClassGroupNavigation)
                    .WithMany(p => p.Schedules)
                    .HasForeignKey(d => d.ClassGroup)
                    .HasConstraintName("FK__SCHEDULE__ClassG__619B8048");

                entity.HasOne(d => d.SchoolNavigation)
                    .WithMany(p => p.Schedules)
                    .HasForeignKey(d => d.School)
                    .HasConstraintName("FK__SCHEDULE__School__14270015");
            });

            modelBuilder.Entity<School>(entity =>
            {
                entity.ToTable("SCHOOL");

                entity.HasIndex(e => e.Administrator, "UQ__SCHOOL__55BB7AE5BF660F83")
                    .IsUnique();

                entity.Property(e => e.SchoolId)
                    .ValueGeneratedNever()
                    .HasColumnName("SchoolID");

                entity.Property(e => e.Category)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SchoolName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.AdministratorNavigation)
                    .WithOne(p => p.School)
                    .HasForeignKey<School>(d => d.Administrator)
                    .HasConstraintName("FK__SCHOOL__Administ__33D4B598");

                entity.HasOne(d => d.SchoolAddressNavigation)
                    .WithMany(p => p.Schools)
                    .HasForeignKey(d => d.SchoolAddress)
                    .HasConstraintName("FK__SCHOOL__SchoolAd__32E0915F");
            });

            modelBuilder.Entity<Schoolevent>(entity =>
            {
                entity.HasKey(e => e.EventId)
                    .HasName("PK__SCHOOLEV__7944C870327B574B");

                entity.ToTable("SCHOOLEVENT");

                entity.Property(e => e.EventId)
                    .ValueGeneratedNever()
                    .HasColumnName("EventID");

                entity.Property(e => e.DateHeld).HasColumnType("date");

                entity.Property(e => e.EventDescription)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(75)
                    .IsUnicode(false);

                entity.HasOne(d => d.CategoryNavigation)
                    .WithMany(p => p.Schoolevents)
                    .HasForeignKey(d => d.Category)
                    .HasConstraintName("FK__SCHOOLEVE__Categ__7A672E12");

                entity.HasOne(d => d.SchoolNavigation)
                    .WithMany(p => p.Schoolevents)
                    .HasForeignKey(d => d.School)
                    .HasConstraintName("FK__SCHOOLEVE__Schoo__7B5B524B");
            });

            modelBuilder.Entity<Street>(entity =>
            {
                entity.ToTable("STREET");

                entity.Property(e => e.StreetId)
                    .ValueGeneratedNever()
                    .HasColumnName("StreetID");

                entity.Property(e => e.StreetName)
                    .HasMaxLength(75)
                    .IsUnicode(false);

                entity.HasOne(d => d.CityNavigation)
                    .WithMany(p => p.Streets)
                    .HasForeignKey(d => d.City)
                    .HasConstraintName("FK__STREET__City__239E4DCF");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("STUDENT");

                entity.Property(e => e.StudentId)
                    .ValueGeneratedNever()
                    .HasColumnName("StudentID");

                entity.HasOne(d => d.ClassGroupNavigation)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.ClassGroup)
                    .HasConstraintName("FK__STUDENT__ClassGr__5812160E");

                entity.HasOne(d => d.SchoolNavigation)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.School)
                    .HasConstraintName("FK__STUDENT__School__01142BA1");

                entity.HasOne(d => d.StudentNavigation)
                    .WithOne(p => p.Student)
                    .HasForeignKey<Student>(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__STUDENT__Student__571DF1D5");
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.ToTable("SUBJECT");

                entity.Property(e => e.SubjectId)
                    .ValueGeneratedNever()
                    .HasColumnName("SubjectID");

                entity.Property(e => e.SubjectName)
                    .HasMaxLength(75)
                    .IsUnicode(false);

                entity.HasOne(d => d.CurriulumNavigation)
                    .WithMany(p => p.Subjects)
                    .HasForeignKey(d => d.Curriulum)
                    .HasConstraintName("FK__SUBJECT__Curriul__6754599E");
            });

            modelBuilder.Entity<SubjectsTeacher>(entity =>
            {
                entity.HasKey(e => new { e.SubjectId, e.TeacherId })
                    .HasName("PK__SUBJECTS__F2C4861C96F05027");

                entity.ToTable("SUBJECTS_TEACHERS");

                entity.Property(e => e.SubjectId).HasColumnName("SubjectID");

                entity.Property(e => e.TeacherId).HasColumnName("TeacherID");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.SubjectsTeachers)
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__SUBJECTS___Subje__6A30C649");

                entity.HasOne(d => d.Teacher)
                    .WithMany(p => p.SubjectsTeachers)
                    .HasForeignKey(d => d.TeacherId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__SUBJECTS___Teach__6B24EA82");
            });

            modelBuilder.Entity<Teacher>(entity =>
            {
                entity.ToTable("TEACHER");

                entity.Property(e => e.TeacherId)
                    .ValueGeneratedNever()
                    .HasColumnName("TeacherID");

                entity.Property(e => e.AcademicDegree)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TeacherCategory)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.SchoolNavigation)
                    .WithMany(p => p.Teachers)
                    .HasForeignKey(d => d.School)
                    .HasConstraintName("FK__TEACHER__School__4F7CD00D");

                entity.HasOne(d => d.TeacherNavigation)
                    .WithOne(p => p.Teacher)
                    .HasForeignKey<Teacher>(d => d.TeacherId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TEACHER__Teacher__4E88ABD4");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("USERS");

                entity.Property(e => e.UserId)
                    .ValueGeneratedNever()
                    .HasColumnName("UserID");

                entity.Property(e => e.Birthday).HasColumnType("date");

                entity.Property(e => e.Gender)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProfilePictureUrl)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserPassword)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.UserAddressNavigation)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.UserAddress)
                    .HasConstraintName("FK__USERS__UserAddre__267ABA7A");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
