using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class ParentsStudent
    {
        public Guid StudentId { get; set; }
        public Guid ParentId { get; set; }

        public virtual Parent Parent { get; set; }
        public virtual Student Student { get; set; }
    }
}
