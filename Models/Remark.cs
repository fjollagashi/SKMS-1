using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Remark
    {
        public Guid RemarkId { get; set; }
        public Guid? Student { get; set; }
        public Guid? Teacher { get; set; }
        public DateTime? DateMarked { get; set; }
        public string Comment { get; set; }

        public virtual Student StudentNavigation { get; set; }
        public virtual Teacher TeacherNavigation { get; set; }
    }
}
