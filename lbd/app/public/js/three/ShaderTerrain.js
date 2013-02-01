  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>three.js/examples/js/ShaderTerrain.js at master · mrdoob/three.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="NOLrx9s6kkKPiYu7Li+YJlYX7GO51QBMnY+0gmOLBMY=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-e2c81310fafdd159323bd0340e9b33c3b940ea28.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-78eb3d450371674b544a947c85fac2343e8556be.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-c12eab4295f1d4a7040c603970f25528f7f173ba.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-5c9e26423495ed0fdce879dd8acaa70c510071e1.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/mrdoob/three.js/blob/1d590a47fc32e34cf66975753f9113210430899a/examples/js/ShaderTerrain.js'>
    <meta property="og:title" content="three.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mrdoob/three.js"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275856"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="JavaScript 3D library. Contribute to three.js development by creating an account on GitHub."/>

    <meta name="description" content="JavaScript 3D library. Contribute to three.js development by creating an account on GitHub." />

  <link href="https://github.com/mrdoob/three.js/commits/master.atom" rel="alternate" title="Recent Commits to three.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production ">
    <div id="wrapper">

    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1337118066" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1337118066" />
          </a>


                  <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="top-nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Fmrdoob%2Fthree.js%2Fblob%2Fmaster%2Fexamples%2Fjs%2FShaderTerrain.js">Sign in</a></li>
    </ul>



          
        </div>
      </div>

      

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">



          <li>
            <span class="star-button"><a href="/login?return_to=%2Fmrdoob%2Fthree.js" class="minibutton btn-star js-toggler-target entice tooltipped leftwards" title="You must be signed in to use this feature" rel="nofollow">Star</a><a class="social-count js-social-count" href="/mrdoob/three.js/stargazers">7,606</a></span>
          </li>
          <li>
            <a href="/login?return_to=%2Fmrdoob%2Fthree.js" class="minibutton btn-fork js-toggler-target fork-button entice tooltipped leftwards"  title="You must be signed in to fork a repository" rel="nofollow">Fork</a><a href="/mrdoob/three.js/network" class="social-count">972</a>
          </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/mrdoob" class="url fn" itemprop="url" rel="author">              <span itemprop="title">mrdoob</span>
              </a></span> /
            <strong><a href="/mrdoob/three.js" class="js-current-repository">three.js</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/mrdoob/three.js" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/mrdoob/three.js/network" highlight="repo_network">Network</a>
    <li><a href="/mrdoob/three.js/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>9</span></a></li>

      <li><a href="/mrdoob/three.js/issues" highlight="repo_issues">Issues <span class='counter'>135</span></a></li>

      <li><a href="/mrdoob/three.js/wiki" highlight="repo_wiki">Wiki</a></li>

    <li><a href="/mrdoob/three.js/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/mrdoob/three.js/tree-list/1d590a47fc32e34cf66975753f9113210430899a"
      data-blob-url-prefix="/mrdoob/three.js/blob/1d590a47fc32e34cf66975753f9113210430899a"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/mrdoob/three.js">three.js</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/mrdoob/three.js/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/mrdoob/three.js/tags" class="" highlight="repo_tags">Tags <span class="counter">22</span></a></li>
    <li><a href="/mrdoob/three.js/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
           <span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
          <div class="context-title">Switch branches/tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/dev/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="dev" rel="nofollow">dev</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/master/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r49/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r49" rel="nofollow">r49</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r48/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r48" rel="nofollow">r48</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r47/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r47" rel="nofollow">r47</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r46/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r46" rel="nofollow">r46</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r45/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r45" rel="nofollow">r45</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r44/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r44" rel="nofollow">r44</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r43/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r43" rel="nofollow">r43</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r42/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r42" rel="nofollow">r42</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r41/ROME/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r41/ROME" rel="nofollow">r41/ROME</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r40/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r40" rel="nofollow">r40</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r39/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r39" rel="nofollow">r39</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r38/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r38" rel="nofollow">r38</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r37/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r37" rel="nofollow">r37</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r36/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r36" rel="nofollow">r36</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r35/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r35" rel="nofollow">r35</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r34/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r34" rel="nofollow">r34</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r33/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r33" rel="nofollow">r33</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r32/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r32" rel="nofollow">r32</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r31/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r31" rel="nofollow">r31</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r30/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r30" rel="nofollow">r30</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r29/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r29" rel="nofollow">r29</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mrdoob/three.js/blob/r28/examples/js/ShaderTerrain.js" class="js-navigation-open" data-name="r28" rel="nofollow">r28</a>
                  </h4>
                </div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/mrdoob/three.js" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/mrdoob/three.js/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/mrdoob/three.js/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">2</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          




<!-- blob contrib key: blob_contributors:v21:ed3f023e6a229b0cab1e953306691c48 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ed3f023e6a229b0cab1e953306691c48 -->

<!-- block_view_fragment_key: views10/v8/blob:v21:fe9408cf33fe77937d030fe9ec7f17a5 -->
  <div id="slider">

    <div class="breadcrumb" data-path="examples/js/ShaderTerrain.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/1d590a47fc32e34cf66975753f9113210430899a" class="js-rewrite-sha" itemprop="url"><span itemprop="title">three.js</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/1d590a47fc32e34cf66975753f9113210430899a/examples" class="js-rewrite-sha" itemscope="url"><span itemprop="title">examples</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/1d590a47fc32e34cf66975753f9113210430899a/examples/js" class="js-rewrite-sha" itemscope="url"><span itemprop="title">js</span></a></span> / <strong class="final-path">ShaderTerrain.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="examples/js/ShaderTerrain.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      <div class="commit file-history-tease js-blob-contributors-loader" data-request-url="/mrdoob/three.js/contributors/master/examples/js/ShaderTerrain.js" data-path="examples/js/ShaderTerrain.js/">
        Fetching contributors…

        <div class="participation">
          <p class="quickstat js-loading-status-text"><img alt="Octocat-spinner-16px" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-16px.gif?1329872730" width="16" /></p>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="examples/js/ShaderTerrain.js/" data-permalink-url="/mrdoob/three.js/blob/1d590a47fc32e34cf66975753f9113210430899a/examples/js/ShaderTerrain.js" data-title="three.js/examples/js/ShaderTerrain.js at master · mrdoob/three.js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>307 lines (193 sloc)</span>
                <span>8.577 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/mrdoob/three.js/edit/1d590a47fc32e34cf66975753f9113210430899a/examples/js/ShaderTerrain.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/mrdoob/three.js/raw/master/examples/js/ShaderTerrain.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/mrdoob/three.js/blame/master/examples/js/ShaderTerrain.js" class="minibutton btn-blame grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/mrdoob/three.js/commits/master/examples/js/ShaderTerrain.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @author alteredq / http://alteredqualia.com/</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> */</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="nx">THREE</span><span class="p">.</span><span class="nx">ShaderTerrain</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'>	<span class="cm">/* -------------------------------------------------------------------------</span></div><div class='line' id='LC9'><span class="cm">	//	Dynamic terrain shader</span></div><div class='line' id='LC10'><span class="cm">	//		- Blinn-Phong</span></div><div class='line' id='LC11'><span class="cm">	//		- height + normal + diffuse1 + diffuse2 + specular + detail maps</span></div><div class='line' id='LC12'><span class="cm">	//		- point and directional lights (use with &quot;lights: true&quot; material option)</span></div><div class='line' id='LC13'><span class="cm">	 ------------------------------------------------------------------------- */</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>	<span class="s1">&#39;terrain&#39;</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>		<span class="nx">uniforms</span><span class="o">:</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">UniformsUtils</span><span class="p">.</span><span class="nx">merge</span><span class="p">(</span> <span class="p">[</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>			<span class="nx">THREE</span><span class="p">.</span><span class="nx">UniformsLib</span><span class="p">[</span> <span class="s2">&quot;fog&quot;</span> <span class="p">],</span></div><div class='line' id='LC20'>			<span class="nx">THREE</span><span class="p">.</span><span class="nx">UniformsLib</span><span class="p">[</span> <span class="s2">&quot;lights&quot;</span> <span class="p">],</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>			<span class="p">{</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>			<span class="s2">&quot;enableDiffuse1&quot;</span>  <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;i&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">0</span> <span class="p">},</span></div><div class='line' id='LC25'>			<span class="s2">&quot;enableDiffuse2&quot;</span>  <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;i&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">0</span> <span class="p">},</span></div><div class='line' id='LC26'>			<span class="s2">&quot;enableSpecular&quot;</span>  <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;i&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">0</span> <span class="p">},</span></div><div class='line' id='LC27'>			<span class="s2">&quot;enableReflection&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;i&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">0</span> <span class="p">},</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>			<span class="s2">&quot;tDiffuse1&quot;</span>	   <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;t&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">texture</span><span class="o">:</span> <span class="kc">null</span> <span class="p">},</span></div><div class='line' id='LC30'>			<span class="s2">&quot;tDiffuse2&quot;</span>	   <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;t&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">texture</span><span class="o">:</span> <span class="kc">null</span> <span class="p">},</span></div><div class='line' id='LC31'>			<span class="s2">&quot;tDetail&quot;</span>	   <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;t&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span> <span class="nx">texture</span><span class="o">:</span> <span class="kc">null</span> <span class="p">},</span></div><div class='line' id='LC32'>			<span class="s2">&quot;tNormal&quot;</span>	   <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;t&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span> <span class="nx">texture</span><span class="o">:</span> <span class="kc">null</span> <span class="p">},</span></div><div class='line' id='LC33'>			<span class="s2">&quot;tSpecular&quot;</span>	   <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;t&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">4</span><span class="p">,</span> <span class="nx">texture</span><span class="o">:</span> <span class="kc">null</span> <span class="p">},</span></div><div class='line' id='LC34'>			<span class="s2">&quot;tDisplacement&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;t&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">5</span><span class="p">,</span> <span class="nx">texture</span><span class="o">:</span> <span class="kc">null</span> <span class="p">},</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>			<span class="s2">&quot;uNormalScale&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;f&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mf">1.0</span> <span class="p">},</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>			<span class="s2">&quot;uDisplacementBias&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;f&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mf">0.0</span> <span class="p">},</span></div><div class='line' id='LC39'>			<span class="s2">&quot;uDisplacementScale&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;f&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mf">1.0</span> <span class="p">},</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>			<span class="s2">&quot;uDiffuseColor&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;c&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Color</span><span class="p">(</span> <span class="mh">0xeeeeee</span> <span class="p">)</span> <span class="p">},</span></div><div class='line' id='LC42'>			<span class="s2">&quot;uSpecularColor&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;c&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Color</span><span class="p">(</span> <span class="mh">0x111111</span> <span class="p">)</span> <span class="p">},</span></div><div class='line' id='LC43'>			<span class="s2">&quot;uAmbientColor&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;c&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Color</span><span class="p">(</span> <span class="mh">0x050505</span> <span class="p">)</span> <span class="p">},</span></div><div class='line' id='LC44'>			<span class="s2">&quot;uShininess&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;f&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">30</span> <span class="p">},</span></div><div class='line' id='LC45'>			<span class="s2">&quot;uOpacity&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;f&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="mi">1</span> <span class="p">},</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>			<span class="s2">&quot;uRepeatBase&quot;</span>    <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;v2&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">(</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">},</span></div><div class='line' id='LC48'>			<span class="s2">&quot;uRepeatOverlay&quot;</span> <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;v2&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">(</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">},</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>			<span class="s2">&quot;uOffset&quot;</span> <span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;v2&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector2</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">}</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>			<span class="p">}</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>		<span class="p">]</span> <span class="p">),</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>		<span class="nx">fragmentShader</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>			<span class="s2">&quot;uniform vec3 uAmbientColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC59'>			<span class="s2">&quot;uniform vec3 uDiffuseColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC60'>			<span class="s2">&quot;uniform vec3 uSpecularColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC61'>			<span class="s2">&quot;uniform float uShininess;&quot;</span><span class="p">,</span></div><div class='line' id='LC62'>			<span class="s2">&quot;uniform float uOpacity;&quot;</span><span class="p">,</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>			<span class="s2">&quot;uniform bool enableDiffuse1;&quot;</span><span class="p">,</span></div><div class='line' id='LC65'>			<span class="s2">&quot;uniform bool enableDiffuse2;&quot;</span><span class="p">,</span></div><div class='line' id='LC66'>			<span class="s2">&quot;uniform bool enableSpecular;&quot;</span><span class="p">,</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>			<span class="s2">&quot;uniform sampler2D tDiffuse1;&quot;</span><span class="p">,</span></div><div class='line' id='LC69'>			<span class="s2">&quot;uniform sampler2D tDiffuse2;&quot;</span><span class="p">,</span></div><div class='line' id='LC70'>			<span class="s2">&quot;uniform sampler2D tDetail;&quot;</span><span class="p">,</span></div><div class='line' id='LC71'>			<span class="s2">&quot;uniform sampler2D tNormal;&quot;</span><span class="p">,</span></div><div class='line' id='LC72'>			<span class="s2">&quot;uniform sampler2D tSpecular;&quot;</span><span class="p">,</span></div><div class='line' id='LC73'>			<span class="s2">&quot;uniform sampler2D tDisplacement;&quot;</span><span class="p">,</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>			<span class="s2">&quot;uniform float uNormalScale;&quot;</span><span class="p">,</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>			<span class="s2">&quot;uniform vec2 uRepeatOverlay;&quot;</span><span class="p">,</span></div><div class='line' id='LC78'>			<span class="s2">&quot;uniform vec2 uRepeatBase;&quot;</span><span class="p">,</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>			<span class="s2">&quot;uniform vec2 uOffset;&quot;</span><span class="p">,</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>			<span class="s2">&quot;varying vec3 vTangent;&quot;</span><span class="p">,</span></div><div class='line' id='LC83'>			<span class="s2">&quot;varying vec3 vBinormal;&quot;</span><span class="p">,</span></div><div class='line' id='LC84'>			<span class="s2">&quot;varying vec3 vNormal;&quot;</span><span class="p">,</span></div><div class='line' id='LC85'>			<span class="s2">&quot;varying vec2 vUv;&quot;</span><span class="p">,</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>			<span class="s2">&quot;uniform vec3 ambientLightColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>			<span class="s2">&quot;#if MAX_DIR_LIGHTS &gt; 0&quot;</span><span class="p">,</span></div><div class='line' id='LC90'>				<span class="s2">&quot;uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];&quot;</span><span class="p">,</span></div><div class='line' id='LC91'>				<span class="s2">&quot;uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];&quot;</span><span class="p">,</span></div><div class='line' id='LC92'>			<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>			<span class="s2">&quot;#if MAX_POINT_LIGHTS &gt; 0&quot;</span><span class="p">,</span></div><div class='line' id='LC95'>				<span class="s2">&quot;uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];&quot;</span><span class="p">,</span></div><div class='line' id='LC96'>				<span class="s2">&quot;uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];&quot;</span><span class="p">,</span></div><div class='line' id='LC97'>				<span class="s2">&quot;uniform float pointLightDistance[ MAX_POINT_LIGHTS ];&quot;</span><span class="p">,</span></div><div class='line' id='LC98'>			<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>			<span class="s2">&quot;varying vec3 vViewPosition;&quot;</span><span class="p">,</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>			<span class="nx">THREE</span><span class="p">.</span><span class="nx">ShaderChunk</span><span class="p">[</span> <span class="s2">&quot;fog_pars_fragment&quot;</span> <span class="p">],</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>			<span class="s2">&quot;void main() {&quot;</span><span class="p">,</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>				<span class="s2">&quot;gl_FragColor = vec4( vec3( 1.0 ), uOpacity );&quot;</span><span class="p">,</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>				<span class="s2">&quot;vec3 specularTex = vec3( 1.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>				<span class="s2">&quot;vec2 uvOverlay = uRepeatOverlay * vUv + uOffset;&quot;</span><span class="p">,</span></div><div class='line' id='LC111'>				<span class="s2">&quot;vec2 uvBase = uRepeatBase * vUv;&quot;</span><span class="p">,</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>				<span class="s2">&quot;vec3 normalTex = texture2D( tDetail, uvOverlay ).xyz * 2.0 - 1.0;&quot;</span><span class="p">,</span></div><div class='line' id='LC114'>				<span class="s2">&quot;normalTex.xy *= uNormalScale;&quot;</span><span class="p">,</span></div><div class='line' id='LC115'>				<span class="s2">&quot;normalTex = normalize( normalTex );&quot;</span><span class="p">,</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>				<span class="s2">&quot;if( enableDiffuse1 &amp;&amp; enableDiffuse2 ) {&quot;</span><span class="p">,</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>					<span class="s2">&quot;vec4 colDiffuse1 = texture2D( tDiffuse1, uvOverlay );&quot;</span><span class="p">,</span></div><div class='line' id='LC120'>					<span class="s2">&quot;vec4 colDiffuse2 = texture2D( tDiffuse2, uvOverlay );&quot;</span><span class="p">,</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>					<span class="s2">&quot;#ifdef GAMMA_INPUT&quot;</span><span class="p">,</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>						<span class="s2">&quot;colDiffuse1.xyz *= colDiffuse1.xyz;&quot;</span><span class="p">,</span></div><div class='line' id='LC125'>						<span class="s2">&quot;colDiffuse2.xyz *= colDiffuse2.xyz;&quot;</span><span class="p">,</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>					<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>					<span class="s2">&quot;gl_FragColor = gl_FragColor * mix ( colDiffuse1, colDiffuse2, 1.0 - texture2D( tDisplacement, uvBase ) );&quot;</span><span class="p">,</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>				<span class="s2">&quot; } else if( enableDiffuse1 ) {&quot;</span><span class="p">,</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>					<span class="s2">&quot;gl_FragColor = gl_FragColor * texture2D( tDiffuse1, uvOverlay );&quot;</span><span class="p">,</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>				<span class="s2">&quot;} else if( enableDiffuse2 ) {&quot;</span><span class="p">,</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>					<span class="s2">&quot;gl_FragColor = gl_FragColor * texture2D( tDiffuse2, uvOverlay );&quot;</span><span class="p">,</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>				<span class="s2">&quot;}&quot;</span><span class="p">,</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>				<span class="s2">&quot;if( enableSpecular )&quot;</span><span class="p">,</span></div><div class='line' id='LC142'>					<span class="s2">&quot;specularTex = texture2D( tSpecular, uvOverlay ).xyz;&quot;</span><span class="p">,</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'>				<span class="s2">&quot;mat3 tsb = mat3( vTangent, vBinormal, vNormal );&quot;</span><span class="p">,</span></div><div class='line' id='LC145'>				<span class="s2">&quot;vec3 finalNormal = tsb * normalTex;&quot;</span><span class="p">,</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>				<span class="s2">&quot;vec3 normal = normalize( finalNormal );&quot;</span><span class="p">,</span></div><div class='line' id='LC148'>				<span class="s2">&quot;vec3 viewPosition = normalize( vViewPosition );&quot;</span><span class="p">,</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>				<span class="c1">// point lights</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>				<span class="s2">&quot;#if MAX_POINT_LIGHTS &gt; 0&quot;</span><span class="p">,</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>					<span class="s2">&quot;vec3 pointDiffuse = vec3( 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC155'>					<span class="s2">&quot;vec3 pointSpecular = vec3( 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>					<span class="s2">&quot;for ( int i = 0; i &lt; MAX_POINT_LIGHTS; i ++ ) {&quot;</span><span class="p">,</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>						<span class="s2">&quot;vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC160'>						<span class="s2">&quot;vec3 lVector = lPosition.xyz + vViewPosition.xyz;&quot;</span><span class="p">,</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>						<span class="s2">&quot;float lDistance = 1.0;&quot;</span><span class="p">,</span></div><div class='line' id='LC163'>						<span class="s2">&quot;if ( pointLightDistance[ i ] &gt; 0.0 )&quot;</span><span class="p">,</span></div><div class='line' id='LC164'>							<span class="s2">&quot;lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>						<span class="s2">&quot;lVector = normalize( lVector );&quot;</span><span class="p">,</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>						<span class="s2">&quot;vec3 pointHalfVector = normalize( lVector + viewPosition );&quot;</span><span class="p">,</span></div><div class='line' id='LC169'>						<span class="s2">&quot;float pointDistance = lDistance;&quot;</span><span class="p">,</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>						<span class="s2">&quot;float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC172'>						<span class="s2">&quot;float pointDiffuseWeight = max( dot( normal, lVector ), 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'>						<span class="s2">&quot;float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>						<span class="s2">&quot;pointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;&quot;</span><span class="p">,</span></div><div class='line' id='LC177'>						<span class="s2">&quot;pointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;&quot;</span><span class="p">,</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>					<span class="s2">&quot;}&quot;</span><span class="p">,</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>				<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>				<span class="c1">// directional lights</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>				<span class="s2">&quot;#if MAX_DIR_LIGHTS &gt; 0&quot;</span><span class="p">,</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>					<span class="s2">&quot;vec3 dirDiffuse = vec3( 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC188'>					<span class="s2">&quot;vec3 dirSpecular = vec3( 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>					<span class="s2">&quot;for( int i = 0; i &lt; MAX_DIR_LIGHTS; i++ ) {&quot;</span><span class="p">,</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>						<span class="s2">&quot;vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>						<span class="s2">&quot;vec3 dirVector = normalize( lDirection.xyz );&quot;</span><span class="p">,</span></div><div class='line' id='LC195'>						<span class="s2">&quot;vec3 dirHalfVector = normalize( dirVector + viewPosition );&quot;</span><span class="p">,</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>						<span class="s2">&quot;float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC198'>						<span class="s2">&quot;float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>						<span class="s2">&quot;float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>						<span class="s2">&quot;dirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;&quot;</span><span class="p">,</span></div><div class='line' id='LC203'>						<span class="s2">&quot;dirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;&quot;</span><span class="p">,</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>					<span class="s2">&quot;}&quot;</span><span class="p">,</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>				<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>				<span class="c1">// all lights contribution summation</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>				<span class="s2">&quot;vec3 totalDiffuse = vec3( 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC212'>				<span class="s2">&quot;vec3 totalSpecular = vec3( 0.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>				<span class="s2">&quot;#if MAX_DIR_LIGHTS &gt; 0&quot;</span><span class="p">,</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>					<span class="s2">&quot;totalDiffuse += dirDiffuse;&quot;</span><span class="p">,</span></div><div class='line' id='LC217'>					<span class="s2">&quot;totalSpecular += dirSpecular;&quot;</span><span class="p">,</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>				<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>				<span class="s2">&quot;#if MAX_POINT_LIGHTS &gt; 0&quot;</span><span class="p">,</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>					<span class="s2">&quot;totalDiffuse += pointDiffuse;&quot;</span><span class="p">,</span></div><div class='line' id='LC224'>					<span class="s2">&quot;totalSpecular += pointSpecular;&quot;</span><span class="p">,</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'>				<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>				<span class="c1">//&quot;gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor) + totalSpecular;&quot;,</span></div><div class='line' id='LC229'>				<span class="s2">&quot;gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );&quot;</span><span class="p">,</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>				<span class="nx">THREE</span><span class="p">.</span><span class="nx">ShaderChunk</span><span class="p">[</span> <span class="s2">&quot;linear_to_gamma_fragment&quot;</span> <span class="p">],</span></div><div class='line' id='LC232'>				<span class="nx">THREE</span><span class="p">.</span><span class="nx">ShaderChunk</span><span class="p">[</span> <span class="s2">&quot;fog_fragment&quot;</span> <span class="p">],</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>			<span class="s2">&quot;}&quot;</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>		<span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>		<span class="nx">vertexShader</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>			<span class="s2">&quot;attribute vec4 tangent;&quot;</span><span class="p">,</span></div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>			<span class="s2">&quot;uniform vec2 uRepeatBase;&quot;</span><span class="p">,</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'>			<span class="s2">&quot;uniform sampler2D tNormal;&quot;</span><span class="p">,</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>			<span class="s2">&quot;#ifdef VERTEX_TEXTURES&quot;</span><span class="p">,</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>				<span class="s2">&quot;uniform sampler2D tDisplacement;&quot;</span><span class="p">,</span></div><div class='line' id='LC249'>				<span class="s2">&quot;uniform float uDisplacementScale;&quot;</span><span class="p">,</span></div><div class='line' id='LC250'>				<span class="s2">&quot;uniform float uDisplacementBias;&quot;</span><span class="p">,</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>			<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>			<span class="s2">&quot;varying vec3 vTangent;&quot;</span><span class="p">,</span></div><div class='line' id='LC255'>			<span class="s2">&quot;varying vec3 vBinormal;&quot;</span><span class="p">,</span></div><div class='line' id='LC256'>			<span class="s2">&quot;varying vec3 vNormal;&quot;</span><span class="p">,</span></div><div class='line' id='LC257'>			<span class="s2">&quot;varying vec2 vUv;&quot;</span><span class="p">,</span></div><div class='line' id='LC258'><br/></div><div class='line' id='LC259'>			<span class="s2">&quot;varying vec3 vViewPosition;&quot;</span><span class="p">,</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>			<span class="s2">&quot;void main() {&quot;</span><span class="p">,</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>				<span class="s2">&quot;vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );&quot;</span><span class="p">,</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>				<span class="s2">&quot;vViewPosition = -mvPosition.xyz;&quot;</span><span class="p">,</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>				<span class="s2">&quot;vNormal = normalize( normalMatrix * normal );&quot;</span><span class="p">,</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>				<span class="c1">// tangent and binormal vectors</span></div><div class='line' id='LC270'><br/></div><div class='line' id='LC271'>				<span class="s2">&quot;vTangent = normalize( normalMatrix * tangent.xyz );&quot;</span><span class="p">,</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>				<span class="s2">&quot;vBinormal = cross( vNormal, vTangent ) * tangent.w;&quot;</span><span class="p">,</span></div><div class='line' id='LC274'>				<span class="s2">&quot;vBinormal = normalize( vBinormal );&quot;</span><span class="p">,</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'>				<span class="c1">// texture coordinates</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'>				<span class="s2">&quot;vUv = uv;&quot;</span><span class="p">,</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>				<span class="s2">&quot;vec2 uvBase = uv * uRepeatBase;&quot;</span><span class="p">,</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>				<span class="c1">// displacement mapping</span></div><div class='line' id='LC283'><br/></div><div class='line' id='LC284'>				<span class="s2">&quot;#ifdef VERTEX_TEXTURES&quot;</span><span class="p">,</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>					<span class="s2">&quot;vec3 dv = texture2D( tDisplacement, uvBase ).xyz;&quot;</span><span class="p">,</span></div><div class='line' id='LC287'>					<span class="s2">&quot;float df = uDisplacementScale * dv.x + uDisplacementBias;&quot;</span><span class="p">,</span></div><div class='line' id='LC288'>					<span class="s2">&quot;vec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;&quot;</span><span class="p">,</span></div><div class='line' id='LC289'>					<span class="s2">&quot;gl_Position = projectionMatrix * displacedPosition;&quot;</span><span class="p">,</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>				<span class="s2">&quot;#else&quot;</span><span class="p">,</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>					<span class="s2">&quot;gl_Position = projectionMatrix * mvPosition;&quot;</span><span class="p">,</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>				<span class="s2">&quot;#endif&quot;</span><span class="p">,</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'>				<span class="s2">&quot;vec3 normalTex = texture2D( tNormal, uvBase ).xyz * 2.0 - 1.0;&quot;</span><span class="p">,</span></div><div class='line' id='LC298'>				<span class="s2">&quot;vNormal = normalMatrix * normalTex;&quot;</span><span class="p">,</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>			<span class="s2">&quot;}&quot;</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>		<span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\n&quot;</span><span class="p">)</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>	<span class="p">}</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'><span class="p">};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/mrdoob/three.js/tree-list/1d590a47fc32e34cf66975753f9113210430899a" data-blob-url-prefix="/mrdoob/three.js/blob/1d590a47fc32e34cf66975753f9113210430899a">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872007" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.31013s from fe12.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="ajax-error-dismiss">Dismiss</a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1315937721" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1315937721" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download">Download</a>
        </li>
      </ul>
    </div>

    
    <span id='server_response_time' data-time='0.31641' data-host='fe12'></span>
  </body>
</html>

