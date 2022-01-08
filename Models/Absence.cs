using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Absence
    {
        public Guid AbsenceId { get; set; }
        public Guid? Student { get; set; }
        public string Reasoned { get; set; }
        public Guid? Period { get; set; }
        public DateTime? DateMarked { get; set; }

        public virtual Period PeriodNavigation { get; set; }
        public virtual Student StudentNavigation { get; set; }
    }
}
