using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Period
    {
        public Period()
        {
            Absences = new HashSet<Absence>();
        }

        public Guid PeriodId { get; set; }
        public string Slot { get; set; }
        public string DayOfTheWeek { get; set; }
        public Guid? Subject { get; set; }
        public Guid? Teacher { get; set; }
        public int? AcademicYear { get; set; }
        public Guid? Schedule { get; set; }

        public virtual Schedule ScheduleNavigation { get; set; }
        public virtual SubjectsTeacher SubjectsTeacher { get; set; }
        public virtual ICollection<Absence> Absences { get; set; }
    }
}
