	$(function() {
			$("#table_id").dataTable({
			"dom": '<f<t><"#df"<"pull-left" i><"pull-right"p><"pull-right"l>>>',
         	"lengthChange": true,
         	"lengthMenu": [[10, 20, 30, -1], [5, 10, 30, "All"]],
         	aaData: [
			["Maths", "95", "A+", "null"],
			["English", "85", "A", "null"],
			["Science", "70", "A+", "2019-06-11 06:30:00"],
			["History", "80", "A", "null"],
			["Arts", "75", "B", "null"],
			["Economics", "70", "A+", "2019-11-09 06:30:00"],
			["Commerce", "80", "A", "null"] ],
			aoColumnDefs: [
			{
			sTitle: "Subject Name",
			aTargets: ["subj_name"] },
			{
			aTargets: [3],
			sType: "date",
			mRender: function(date, type, full) {
			return full[1] == "70" ? new Date(date).toDateString() : "N/A";
			}
			}
			] });
			});