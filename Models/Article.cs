using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Article
    {
        public Guid ArticleId { get; set; }
        public string Title { get; set; }
        public string Contents { get; set; }
        public DateTime? DatePublished { get; set; }
        public string PictureUrl { get; set; }
        public Guid? School { get; set; }

        public virtual School SchoolNavigation { get; set; }
    }
}
