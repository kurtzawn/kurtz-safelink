
<script type='text/javascript'>
//<![CDATA[
var blog = document.location.hostname;
var slug = document.location.pathname;
var ctld = blog.substr(blog.lastIndexOf("."));
if (ctld != ".com") {
var ncr = "https://" + blog.substr(0, blog.indexOf("."));
ncr += ".blogspot.com/ncr" + slug;
window.location.replace(ncr); };

var currentURL=location.href;
var str = currentURL;
  var res = str.replace("https://mysafellnk.blogspot.com/p/generate.html?url=", "");
$(".Visit_Link").hide();
function changeLink(){
    var decodedString = Base64.decode(res);
    window.open(decodedString,'_self')
}

function generate() {
    var linkDL = document.getElementById("download"),
        linkAL = document.getElementById("download2"),
        btn = document.getElementById("btn"),
        notif = document.getElementById("daplong"),
        direklink = document.getElementById("download").href,
        waktu = 4;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            notif.style.display = "none";
            linkDL.style.display = "inline";
            linkAL.style.display = "inline";
        } else {
            teks_waktu.innerHTML = "<h3 class='text-danger'>Link will appear in " + waktu.toString() + " Second</h3>";
            btn.style.display = "none";
        }
    }, 2000);
}

cookieOptions = {
    msg: "This site uses cookies to help deliver services. By using this site, you agree to the use of cookies.",
    link: "https://www.blogger.com/go/blogspot-cookies",
    close: "Got it!",
    learn: "Learn More" };
//]]>


var uri = window.location.toString();
if (uri.indexOf(&quot;%3D&quot;,&quot;%3D&quot;) &gt; 0) {
  var clean_uri = uri.substring(0, uri.indexOf(&quot;%3D&quot;));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf(&quot;%3D%3D&quot;,&quot;%3D%3D&quot;) &gt; 0) {
  var clean_uri = uri.substring(0, uri.indexOf(&quot;%3D%3D&quot;));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf(&quot;&amp;m=1&quot;,&quot;&amp;m=1&quot;) &gt; 0) {
  var clean_uri = uri.substring(0, uri.indexOf(&quot;&amp;m=1&quot;));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf(&quot;?m=1&quot;,&quot;?m=1&quot;) &gt; 0) {
  var clean_uri = uri.substring(0, uri.indexOf(&quot;?m=1&quot;));
    window.history.replaceState({}, document.title, clean_uri);
}

protected_links = "www.safelink.ga,blogspot.com,youtube.com,facebook.com,google.com,twitter.com"; 
  (function() {
    var sl = document.createElement('script');
    sl.type = 'text/javascript'; sl.async = true;
    sl.src = 'https://rawcdn.githack.com/kurtzawn/kurtz-safelink/master/kurtz-safelink.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(sl);
  })();


<script src='//cdn.jsdelivr.net/zeroclipboard/2.2.0/ZeroClipboard.js' type='text/javascript'/>

  ZeroClipboard.config({
    swfPath: "//cdn.jsdelivr.net/zeroclipboard/2.2.0/ZeroClipboard.swf"
  });
  var client = new ZeroClipboard(document.getElementById('btnCopy'));
  client.on('ready', function(event) {
    document.getElementById('btnCopy').style.display = 'inline-block';

    client.on('copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.value);
    });

    client.on('aftercopy', function(event) {
      document.getElementById('btnInfo').style.display = 'block';
      document.getElementById('inputURL').value = '';
      document.getElementById('resultLink').value = '';
    });
  });

  client.on('error', function(event) {
    ZeroClipboard.destroy();
  });
  var output = document.getElementById('resultLink'),
    input = document.getElementById('inputURL');
  input.onkeyup = function() {
    if (input.value != "") {
      output.value = "https://mysafellnk.blogspot.com/p/generate.html?url=" + Base64.encode(this.value); //change with your link
    } else {
      output.value = "";
    }
  }

<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'/>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'/>
<script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-progressbar/0.9.0/bootstrap-progressbar.min.js' type='text/javascript'/>


<script type='text/javascript'>

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(0).W(4(){$(\'.w .w-X\').Y({V:\'10\'})});(4($){8 j=$(\'a.x-v-17-u\');8 k=$(\'a.x-v-18-u\');$.t(j.y(\'7\'),4(s){j.b($(s).E(\'.c D.c-9\').r())},"b");$.t(k.y(\'7\'),4(z){k.b($(z).E(\'.c D.c-9\').r())},"b")})(T);$(4(){$(\'a[7*="#"]:S([7="#"])\').R(4(){6(F.A.B(/^\\//,\'\')==d.A.B(/^\\//,\'\')&&F.q==d.q){8 5=$(d.m);5=5.l?5:$(\'[1d=\'+d.m.1p(1)+\']\');6(5.l){$(\'b, 1n\').1s({1t:5.1u().1r},1k);g f}}})});8 1l="";4 M(){6(1c.1b==2){g f}}4 o(e){6(0.p||0.h&&!0.n){6(e.G==2||e.G==3){g f}}}6(0.p){0.1e(1f.1j);0.C=o}1h 6(0.n&&!0.h){0.C=M}0.1g=1i 1a("g f");(4 1m(){8 K=0["h"]("1o");K["1q"]="19 H <a 7=\\\'O://I.14.i/\\\' 5=\\\'J\\\' 9=\\\'N L\\\'>N L</a> - U Z H <a 7=\\\'16://I.15.i/\\\' 5=\\\'J\\\' 9=\\\'P\\\'>P</a> - 11 12 <a 7=\\\'O://13.i/\\\' 9=\\\'Q 3\\\'>Q 3</a>"})();',62,93,'document||||function|target|if|href|var|title||html|post|this||false|return|getElementById|com|newerLink|olderLink|length|hash|all|clickNS4|layers|hostname|text|data|get|link|pager|progress|blog|attr|data2|pathname|replace|onmousedown|h1|find|location|which|by|www|_blank|_0x6a32x8|Ajaib|clickIE4|Kompi|http|Blogger|Bootstrap|click|not|jQuery|Proudly|display_text|ready|bar|progressbar|powered|fill|Built|with|getbootstrap|kompiajaib|blogger|https|newer|older|Design|Function|button|event|name|captureEvents|Event|oncontextmenu|else|new|MOUSEDOWN|1000|message|printMsg|body|credits|slice|innerHTML|top|animate|scrollTop|offset'.split('|'),0,{}))


<b:if cond='data:blog.pageType != &quot;static_page&quot; and data:blog.pageType != &quot;item&quot;'>

var postperpage=3;//sesuaikan dengan jumlah postingan di homepage
var numshowpage=3;
var upPageWord="Prev";
var downPageWord="Next";
var home_page="/";
var urlactivepage=location.href;

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 M;7 l;7 i;7 u;1B();I 1s(18){7 6=\'\';P=L(S/2);5(P==S-P){S=P*2+1}E=i-P;5(E<1)E=1;g=L(18/o)+1;5(g-1==18/o)g=g-1;F=E+S-1;5(F>g)F=g;6+="<1l b=\'4-1o\' 1I=\'1o\'><3 9=\'3\' b=\'4 4-c 1K\'>1J "+i+\' 1H \'+g+"</3>";7 1f=L(i)-1;5(i>1){5(i==2){5(l=="s"){6+=\'<3 9="3" b="4 4-c 1T"><a f="\'+D+\'">\'+Q+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="/x/v/\'+u+\'?&d-r=\'+o+\'">\'+Q+\'</a></3>\'}}e{5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="#" A="O(\'+1f+\');B C">\'+Q+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="#" A="N(\'+1f+\');B C">\'+Q+\'</a></3>\'}}}5(E>1){5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="\'+D+\'">1</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="/x/v/\'+u+\'?&d-r=\'+o+\'">1</a></3>\'}}5(E>2){6+=\' ... \'}1m(7 m=E;m<=F;m++){5(i==m){6+=\'<3 9="3" b="4 4-c 1E">\'+m+\'</3>\'}e 5(m==1){5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="\'+D+\'">1</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="/x/v/\'+u+\'?&d-r=\'+o+\'">1</a></3>\'}}e{5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="#" A="O(\'+m+\');B C">\'+m+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="#" A="N(\'+m+\');B C">\'+m+\'</a></3>\'}}}5(F<g-1){6+=\'...\'}5(F<g){5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="#" A="O(\'+g+\');B C">\'+g+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="#" A="N(\'+g+\');B C">\'+g+\'</a></3>\'}}7 1d=L(i)+1;5(i<g){5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="#" A="O(\'+1d+\');B C">\'+1k+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="#" A="N(\'+1d+\');B C">\'+1k+\'</a></3></1l>\'}}7 G=y.1Q("G");7 1a=y.1R("1S-1O");1m(7 p=0;p<G.T;p++){G[p].1i=6}5(G&&G.T>0){6=\'\'}5(1a){1a.1i=6}}I 1g(15){7 U=15.U;7 1x=L(U.1L$1M.$t,10);1s(1x)}I 1B(){7 k=w;5(k.h("/x/v/")!=-1){5(k.h("?V-d")!=-1){u=k.K(k.h("/x/v/")+14,k.h("?V-d"))}e{u=k.K(k.h("/x/v/")+14,k.h("?&d"))}}5(k.h("?q=")==-1&&k.h(".6")==-1){5(k.h("/x/v/")==-1){l="s";5(w.h("#J=")!=-1){i=w.K(w.h("#J=")+8,w.T)}e{i=1}y.1r("<n W=\\""+D+"16/17/13?d-r=1&X=Y-Z-n&R=1g\\"><\\/n>")}e{l="v";5(k.h("&d-r=")==-1){o=1N}5(w.h("#J=")!=-1){i=w.K(w.h("#J=")+8,w.T)}e{i=1}y.1r(\'<n W="\'+D+\'16/17/13/-/\'+u+\'?X=Y-Z-n&R=1g&d-r=1" ><\\/n>\')}}}I O(H){12=(H-1)*o;M=H;7 11=y.1u(\'1v\')[0];7 z=y.1t(\'n\');z.9=\'1p/1q\';z.1w("W",D+"16/17/13?1A-1z="+12+"&d-r=1&X=Y-Z-n&R=1c");11.1y(z)}I N(H){12=(H-1)*o;M=H;7 11=y.1u(\'1v\')[0];7 z=y.1t(\'n\');z.9=\'1p/1q\';z.1w("W",D+"16/17/13/-/"+u+"?1A-1z="+12+"&d-r=1&X=Y-Z-n&R=1c");11.1y(z)}I 1c(15){1b=15.U.1P[0];7 1j=1b.1n.$t.K(0,19)+1b.1n.$t.K(1G,1D);7 1e=1F(1j);5(l=="s"){7 1h="/x?V-d="+1e+"&d-r="+o+"#J="+M}e{7 1h="/x/v/"+u+"?V-d="+1e+"&d-r="+o+"#J="+M}1C.f=1h}',62,118,'|||button|btn|if|html|var||type||class|default|max|else|href|maksimal|indexOf|nomerhal|showpageNum|thisUrl|jenis|jj|script|postperpage|||results|page||lblname1|label|urlactivepage|search|document|newInclude|onclick|return|false|home_page|mulai|akhir|pageArea|numberpage|function|PageNo|substring|parseInt|nopage|redirectlabel|redirectpage|nomerkiri|upPageWord|callback|numshowpage|length|feed|updated|src|alt|json|in||nBody|jsonstart|summary||root|feeds|posts|banyakdata||blogPager|post|finddatepost|nextnomer|timestamp|prevnomer|hitungtotaldata|alamat|innerHTML|timestamp1|downPageWord|div|for|published|group|text|javascript|write|loophalaman|createElement|getElementsByTagName|head|setAttribute|totaldata|appendChild|index|start|halamanblogger|location|29|showpagePoint|encodeURIComponent|23|of|role|Page|showpageOf|openSearch|totalResults|20|pager|entry|getElementsByName|getElementById|blog|showpage'.split('|'),0,{}))

<script type='text/javascript'>
if (window.jstiming) window.jstiming.load.tick('widgetJsBefore');
document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://www.blogger.com/static/v1/widgets/2759014865-widgets.js\"></scr" + "ipt>");
if (typeof(BLOG_attachCsiOnload) != &quot;undefined&quot; &amp;&amp; BLOG_attachCsiOnload != null) { window[&quot;blogger_templates_experiment_id&quot;] = &quot;templatesV1&quot;;window[&quot;blogger_blog_id&quot;] = &quot;<data:blog.blogId/>&quot;;BLOG_attachCsiOnload(&quot;&quot;); }_WidgetManager._Init(&quot;//www.blogger.com/rearrange?blogID\x3d<data:blog.blogId/>&quot;,&quot;<data:blog.url/>&quot;,&quot;<data:blog.blogId/>&quot;);
_WidgetManager._RegisterWidget(&quot;_ContactFormView&quot;, new _WidgetInfo(&quot;ContactForm1&quot;, &quot;footer1&quot;, null, document.getElementById(&quot;ContactForm1&quot;), {&quot;contactFormMessageSendingMsg&quot;: &quot;Sending...&quot;, &quot;contactFormMessageSentMsg&quot;: &quot;Your message has been sent.&quot;, &quot;contactFormMessageNotSentMsg&quot;: &quot;Message could not be sent. Please try again later.&quot;, &quot;contactFormInvalidEmailMsg&quot;: &quot;A valid email address is required.&quot;, &quot;contactFormEmptyMessageMsg&quot;: &quot;Message field cannot be empty.&quot;, &quot;title&quot;: &quot;Contact Form&quot;, &quot;blogId&quot;: &quot;<data:blog.blogId/>&quot;, &quot;contactFormNameMsg&quot;: &quot;Name&quot;, &quot;contactFormEmailMsg&quot;: &quot;Email&quot;, &quot;contactFormMessageMsg&quot;: &quot;Message&quot;, &quot;contactFormSendMsg&quot;: &quot;Send&quot;, &quot;submitUrl&quot;: &quot;https://www.blogger.com/contact-form.do&quot;}, &quot;displayModeFull&quot;));
</script>