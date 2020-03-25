export default function() {
  return [
    {
      title: "Notification Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Send Notification",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Notifications",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "Resend Notification",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },

    {
      title: "Logout",
      htmlBefore: '<i class="material-icons">rowing</i>',
      to: "/login",
    },
    
  ];
}
