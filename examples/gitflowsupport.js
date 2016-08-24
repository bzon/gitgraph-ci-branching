/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

var myTemplateConfig = {
  colors: [ "#888",  "#00F", "#0F0" ], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    spacingX: 50,
	showLabel: true,
	
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 15
    },
    message: {
      displayAuthor: true,
      displayBranch: true,
      displayHash: true,
      font: "normal 14pt Arial"
    },
    shouldDisplayTooltipsInCompactMode: false, // default = true
    tooltipHTMLFormatter: function ( commit ) {
      return "<b>" + commit.sha1 + "</b>" + ": " + commit.message;
    }
  }
};
var myTemplate = new GitGraph.Template( myTemplateConfig );

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: myTemplate    // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
  //, reverseArrow: true  // to make arrows point to ancestors, if displayed
  //, orientation: "vertical-reverse"
  //, mode: "compact"     // special compact mode : hide messages & compact graph
};
var gitGraph = new GitGraph( config );
gitGraph.author = "eid <eid@accenture.com>"; //Set author name here...

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

// Create branch named "master"
var master = gitGraph.branch( "master" );

// Commit on HEAD Branch which is "master"
gitGraph.commit( "Initial commit" );

var commitWithDetailsConfig = {
  message: "Feature message here...",
  detailId: "detail" // Id of detail div (available in normal vertical mode only)
};
// Create a new "dev" branch from "master"
var dev = master.branch( "feature-1" );
dev.commit( commitWithDetailsConfig ); //Change "Feature message here..." to your preferred message


// Create a new "dev" branch from "master" for another feature
var dev2 = master.branch( "feature-2" );
dev2.commit( "Feature message here..." ); //Change "Feature message here..." to your preferred message

dev.merge( master );
dev2.merge( master );