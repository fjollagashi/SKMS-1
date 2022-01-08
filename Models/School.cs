using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class School
    {
        public School()
        {
            Articles = new HashSet<Article>();
            Classrooms = new HashSet<Classroom>();
            Curricula = new HashSet<Curriculum>();
            Schedules = new HashSet<Schedule>();
            Schoolevents = new HashSet<Schoolevent>();
            Students = new HashSet<Student>();
            Teachers = new HashSet<Teacher>();
        }

        public Guid SchoolId { get; set; }
        public string SchoolName { get; set; }
        public Guid? SchoolAddress { get; set; }
        public string Category { get; set; }
        public Guid? Administrator { get; set; }

        public virtual Administrator AdministratorNavigation { get; set; }
        public virtual Street SchoolAddressNavigation { get; set; }
        public virtual ICollection<Article> Articles { get; set; }
        public virtual ICollection<Classroom> Classrooms { get; set; }
        public virtual ICollection<Curriculum> Curricula { get; set; }
        public virtual ICollection<Schedule> Schedules { get; set; }
        public virtual ICollection<Schoolevent> Schoolevents { get; set; }
        public virtual ICollection<Student> Students { get; set; }
        public virtual ICollection<Teacher> Teachers { get; set; }
    }
}
