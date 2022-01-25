using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Grade
    {
        public Guid GradeId { get; set; }
        public Guid? Student { get; set; }
		//Subject is Teacher, and Teacher is Subject
        public Guid? Subject { get; set; }
        public Guid? Teacher { get; set; }
        public int? Value { get; set; }
        public int? AcademicYear { get; set; }
        public int? Semester { get; set; }

        public virtual Student StudentNavigation { get; set; }
        public virtual SubjectsTeacher SubjectsTeacher { get; set; }
    }
}
