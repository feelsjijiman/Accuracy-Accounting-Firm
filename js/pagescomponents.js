import { hideSponsors } from './maintest.js';

$(window).on("load", function() {
  window.addEventListener( 'touchmove', function(e) {
    e.preventDefault();
  }, {passive: false});
  $('.closeSec').hide();
  $('.infotext').hide();
  $('.boxtitle').hide();
  $('.dropsel').hide();
  $('.sent').hide();
  $('.morestories').hide();
  $('.awoverlay').hide();
  $('.spoverlay').hide();
  $('.faq').hide();
  $('.caption').hide();
  $('.compvideo').hide();
  $('.codesnippet').hide();
  $('.anotherqanda').hide();
  //declaring instances
  const a2Maker = new panelAndDefaults();
  const a3Maker = new panelAndDefaults();
  const a4Maker = new panelAndDefaults();
  const a5Maker = new panelAndDefaults();
  const secEditor = new sectionMan();
  const dropdownManipulator = new dropdownMan('.B3', ['.B3 .middle .title', '.B3 .middle .infofromsides']);
  a2Maker.newPanel("T A X", "Programming serves as a key part of the FTC competition, making our robot move based on the controller and also sensors. Our four programmers help develop Java code for Autonomous and TeleOp, bringing us up on top. We practice together, discussing issues and testing prototypes of our programs. In the end, we aim to build a great program to perform our best.", ".A2", ".leftside");

  //all the configs
  let currentBio = 0;
  $('.A2 .rightside .images .imgtopleft').click(function() {
    currentBio = 0;
    a2Maker.newPanel("b e n e f i t s", "The Captain of the Programming Division, Joshua oversees the creation of the autonomous and tele-op programs. He also made various side programs, including one for presentations and another that can play music. Joshua enjoys programming games, playing chess, and spending time with friends and family.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomleft').click(function() {
    a2Maker.newPanel("o u r \xa0\xa0p r o c e s s", "As a Team Lawyer, Eric, aka h0dL - 3 - Jumpman - Ankle Bully, who's in 8th grade, understands the rulebook front to back, in addition to programming the encoder-based autonomous program on the Crater Side. He enjoys programming, playing basketball, and Bitcoin.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottommiddle').click(function() {
    currentBio = 0;
    a2Maker.newPanel("t a x", "Programming serves as a key part of the FTC competition, making our robot move based on the controller and also sensors. Our four programmers help develop Java code for Autonomous and TeleOp, bringing us up on top. We practice together, discussing issues and testing prototypes of our programs. In the end, we aim to build a great program to perform our best.", ".A2", ".leftside");
  });

  $('.A3 .leftside .images .imgbottomleft').click(function() {
    a3Maker.newPanel("b e n e f i t s", "Kawin stands as the Robot Captain, overlooking the robot from start to end. He is a key builder for our robot, starting from assembling the chassis to last-minute fixes. Other than that, Kawin works on the Promote video and helps out other team members with mechanical issues. At school, Kawin is part of the marching band; at home, he watches anime.", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgbottommiddle').click(function() {
    a3Maker.newPanel("o u r \xa0\xa0p r o c e s s", "Without a robot, we would never win a competition. Where other category members can’t fill in, we have Building members swoop in to build the robot. Through all the work and dedication, the 5 main builders have constructed the base, scoring mechanism, intake system, protection safeties, and wiring setups. Just to name a few, they use power tools, brackets, channels, zip ties, a variety of nuts and bolts, hammers, and plexiglass to construct the robot. ", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopleft').click(function() {
    a3Maker.newPanel("b o o k k e e p i n g", "Glory, Electrician Captain, helps with organizing the wires and wiring the robot. With the use of zip ties, she prevents the wires from turning into a spaghetti like mess and interfering with the robot’s mechanisms. She is also a scouter and keeps track of game points during practice runs and meets. She is a neat freak who enjoys reading and talking to plants.", ".A3", ".rightside");
  });

  $('.A4 .rightside .images .imgbottomleft').click(function() {
    a4Maker.newPanel("o u r \xa0\xa0p r o c e s s", "Sarah controls the Engineering Notebook, an important part of the . It keeps all the documents of our team, even what we have as snacks for each practice. Sarah also meets with businesses in person, asking for a funding to keep our team going. Sarah loves to listen to music, watch the newest movies, and hang out with friends.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottommiddle').click(function() {
    a4Maker.newPanel("f i n a n c i a l", "Although it may not seem like it, Business members are vital to having a functional team. Business controls our external relationships with businesses, experts and outreach events, while also doing documentation and scouting for competition. They find places to spread the world of STEM, attract sponsors to support our team, invite experts over to give us tips, manage the Engineering Notebook, and get information about who could benefit us as an Alliance. Business members always try to keep track of our programming and building progress as well, so we can accurately recollect of what we have done. They fill the Engineering Notebook with great details about our team’s accomplishments and hope to inspire kids to do as great.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopleft').click(function() {
    a4Maker.newPanel("b e n e f i t s", "Jason works on the Engineering Section for our team, drives the robot during the competition, and helps build and maintain the robot. In the Engineering Section, Jason includes the robot’s mechanisms and functionalities. When he’s not doing robotics, he plays games, dragonboats, and practices the handbell.", ".A4", ".leftside");
  });

  $('.A5 .botside .images .imgfarleft').click(function() {
    a5Maker.newPanel("a p p o i n t m e n t s", "As Wolf Corp., our goal is to inspire other kids to work as a team and get involved in STEM education. The robot isn’t the only part of the competition, and we never aim to just get first place in the competition. Truly impacting the community and people around us to be excited about robotics and STEM is what we aspire to do. Instead of just focusing on our team, we aim to influence brilliant teenagers and kids to improve the world.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaleft').click(function() {
    a5Maker.newPanel("l e v e l \xa0\xa01", "At Walnut High School, we were able to set up the first robotics club to encourage our school to learn more about STEM and robotics. We inspired two teachers, Ms. Lindemann and Mr. Madrid, to help support our cause and become our advisors. Mr. Madrid helps out on the advisor-required meetings and has useful tips for running the club. We have meetups every other Tuesday during lunch at Ms. Lindemann’s classroom, to discuss our robot and teach them some new information. Students can come anytime during the season and is open to everyone. Our club has successfully connected Walnut High to FIRST.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaright').click(function() {
    a5Maker.newPanel("l e v e l \xa0\xa02", "Our team has connected to more than 20 STEM experts for knowledge. For example, we visited Walnut Valley Robotics to learn about electrical power tools. We met with Dr. Spiros, the Manager of Outreach at CalTech. He reviewed our outreaches and encouraged us to do more. Also, Mr. Jacob, a JPL robotics engineer helped us with our scoring mechanism issue and suggested we have a pre-check and post-check for our robot before and after a match. We went to the “Crush Master and Grinding Company” who gave us a tour and introduced us to CNC and WATER JET machines which they later used to cut multiple pieces for our robot. Experts are always a big help to us, and are a great part of the community.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgfarright').click(function() {
    a5Maker.newPanel("l e v e l \xa0\xa03", "From helping other teams to holding workshops, we also encourage other teams to do their best. Our team mentored multiple FLL teams such as HEXA Challengers who are advancing to the World Festival this year. At the beginning of the season, we hosted 2 programming workshops for 12 new coaches at Suzanne Middle school. Every summer, we host a robotics workshop at the walnut library where we teach kids how to build and program robots. We also held 2 workshops for new FTC teams and volunteered at 3 FLL and 2 FTC tournaments.", ".A5", ".topside");
  });

  //b1andb2

  $('.B1 .sections .topleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B1');
    setTimeout(function(){$('.compvideo').fadeIn();}, 300);
  });
  $('.B1 .sections .topleft').mouseenter(() => {
    $('.B1 .sections .topleft').addClass('halfgone');
  }).mouseleave(() => {
    $('.B1 .sections .topleft').removeClass('halfgone');
  });
  $('.B1 .sections .topright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B1');
  });
  $('.B1 .sections .topright').mouseenter(() => {
    $('.B1 .sections .topright').addClass('halfgone');
  }).mouseleave(() => {
    $('.B1 .sections .topright').removeClass('halfgone');
  });
  $('.B1 .sections .botleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B1');
  });
  $('.B1 .sections .botleft').mouseenter(() => {
    $('.B1 .sections .botleft').addClass('halfgone');
  }).mouseleave(() => {
    $('.B1 .sections .botleft').removeClass('halfgone');
  });
  $('.B1 .sections .botright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B1');
  });
  $('.B1 .sections .botright').mouseenter(() => {
    $('.B1 .sections .botright').addClass('halfgone');
  }).mouseleave(() => {
    $('.B1 .sections .botright').removeClass('halfgone');
  });
  $('.B1 .sections .closeSec').click(function() {
    $('.B1 .sections .closeSec').fadeOut(250);
    secEditor.showAllSec('.B1');
    $('.compvideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    $('.compvideo').hide();
  });

  $('.B2 .sections .topleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B2');
  });
  $('.B2 .sections .topleft').mouseenter(() => {
    $('.B2 .sections .topleft').addClass('halfgone');
  }).mouseleave(() => {
    $('.B2 .sections .topleft').removeClass('halfgone');
  });
  $('.B2 .sections .topright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B2');
  });
  $('.B2 .sections .topright').mouseenter(() => {
    $('.B2 .sections .topright').addClass('halfgone');
  }).mouseleave(() => {
    $('.B2 .sections .topright').removeClass('halfgone');
  });
  $('.B2 .sections .botleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B2');
  });
  $('.B2 .sections .botleft').mouseenter(() => {
    $('.B2 .sections .botleft').addClass('halfgone');
  }).mouseleave(() => {
    $('.B2 .sections .botleft').removeClass('halfgone');
  });
  let botRightNotClicked = true;
  let running = false;
  $('.B2 .sections .botright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B2');
    if (botRightNotClicked) {
        running = true;
        codeSnippetRunCarousel();
        setInterval(function() {codeSnippetRunCarousel()}, 5400);
        botRightNotClicked = false;
    }
  });
  $('.B2 .sections .botright').mouseenter(() => {
    $('.B2 .sections .botright').addClass('halfgone');
  }).mouseleave(() => {
    $('.B2 .sections .botright').removeClass('halfgone');
  });
  $('.B2 .sections .closeSec').click(function() {
    running = false;
    $('.B2 .sections .closeSec').fadeOut(250);
    secEditor.showAllSec('.B2');
    $('.codesnippet').hide();
    botRightNotClicked = true;
    setTimeout(function() {
      $('.codesnippet').hide();
    }, 500);
    setTimeout(function() {
      $('.codesnippet').hide();
    },  1000);
    setTimeout(function() {
      $('.codesnippet').hide();
    },  4500);
    setTimeout(function() {
      $('.codesnippet').hide();
    },  5200);
    setTimeout(function() {
      $('.codesnippet').hide();
    },  5800);
  });

  //B2 Codesnippet carousel
  let codepictures = ['codesnippet.PNG', 'codesnippet1.PNG', 'codesnippet2.PNG', 'codesnippet3.PNG'];
  let selected = 0;

  function codeSnippetRunCarousel() {
    /*
    if (running) {
      selected %= 4;
      $('.codesnippet').attr('src',`css/images/${codepictures[selected]}`);
      setTimeout(function() {
        $('.codesnippet').addClass('fadeIn');
        $('.codesnippet').show(); }, 400);
      setTimeout(function() {
        $('.codesnippet').removeClass('fadeIn');
        $('.codesnippet').removeClass('fadeInRight');
        $('.codesnippet').addClass('fadeOutLeft');
        setTimeout(function() {
          $('.codesnippet').attr('src',`css/images/${codepictures[selected]}`);
          $('.codesnippet').removeClass('fadeIn');
          $('.codesnippet').removeClass('fadeOutLeft');
          $('.codesnippet').addClass('fadeInRight'); $('.codesnippet').show();
          selected++;
        }, 1000);
      }, 5400);
    }
    */
  };

  //B3 Dropdown stuff
  $('.B3 .left .dropdown .droplabel').click(function() {
    if (dropdownleftopen) {
      $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
      $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
      $('.B3 .left .dropdown .dropmenu .dropsel').fadeOut(1500);
      $('.B3 .left .dropdown .droplabel img').removeClass('flip180');
      $('.B3 .left .dropdown .droplabel img').addClass('unflip180');
      dropdownleftopen = false;
    } else {
      $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeInDown');
      $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeOutUp');
      $('.B3 .left .dropdown .dropmenu .dropsel').show();
      $('.B3 .left .dropdown .droplabel img').removeClass('unflip180');
      $('.B3 .left .dropdown .droplabel img').addClass('flip180');
      dropdownleftopen = true;
    }
  });
  $('.B3 .right .dropdown .droplabel').click(function() {
    if (dropdownrightopen) {
      $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
      $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
      $('.B3 .right .dropdown .dropmenu .dropsel').fadeOut(1500);
      $('.B3 .right .dropdown .droplabel img').removeClass('flip180');
      $('.B3 .right .dropdown .droplabel img').addClass('unflip180');
      dropdownrightopen = false;
    } else {
      $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeInDown');
      $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeOutUp');
      $('.B3 .right .dropdown .dropmenu .dropsel').show();
      $('.B3 .right .dropdown .droplabel img').removeClass('unflip180');
      $('.B3 .right .dropdown .droplabel img').addClass('flip180');
      dropdownrightopen = true;
    }
  });
  dropdownManipulator.handleChoice(1, '.left', 'Advisory Financial Services Director', 'As a Director, you’ll work as part of a team of problem solvers with extensive consulting and industry experience, helping our clients solve their complex business issues from strategy to execution.<br><br>Requirements:<br>Bachelor Degree, 10 Years of Experience<br><br>Preferred Skills:<br>- Thorough experience identifying and addressing client needs: developing and sustaining deep client relationships using networking, negotiation and persuasion skills to identify and sell potential new service opportunities; preparing and presenting complex written and verbal materials; and defining resource requirements, project workflow, budgets, billing and collection.<br> - Thorough experience as a team leader: leading teams to generate a vision, establish direction and motivate members, create an atmosphere of trust, leverage diverse views, coach staff, and encourage improvement and innovation.');
  dropdownManipulator.handleChoice(2, '.left', 'International Tax Director', 'As a Director, you’ll work as part of a team of problem solvers with extensive consulting and industry experience, helping our clients solve their complex business issues from strategy to execution.<br><br>Requirements:<br>Bachelor Degree in Accounting, 8 Years of Experience, CPA, Enrolled Agent, or Member of the Bar<br><br>Preferred Skills:<br>Extensive knowledge of assisting companies to understand and assess the tax impact of company business, operations and transactions in multiple jurisdictions. Extensive technical skills in structural realignment, cash and financial statement effective tax rate analysis and improvement of tax efficiencies of cross-border flows. Thorough experience identifying and addressing client needs. Thorough experience as a team leader: leading teams to generate a vision, establish direction and motivate members, create an atmosphere of trust, leverage diverse views, coach staff, and encourage improvement and innovation.');
  dropdownManipulator.handleChoice(1, '.right', 'Tax Innovation Reporting and Strategy Associate', 'As a Senior Associate, you’ll work as part of a team of problem solvers with extensive consulting and industry experience, helping our clients solve their complex business issues from strategy to execution.<br><br>Requirements:<br>Bachelor Degree, Accounting, Business Administration/Management, Economics, Finance and Technology, 2 years of experience, and certification in one of the following: CPA, EA, Admission to the Bar<br><br>Preferred Skills:<br>Demonstrates a thorough understanding of ERP-based solutions to contribute as a key team member in consulting, designing, implementing and supporting those solutions as demonstrated by the successful management of enterprise application architecture, selection, implementation and optimization projects. Demonstrates proven thorough abilities and success utilizing ERP-based solutions.');
  dropdownManipulator.handleChoice(2, '.right', 'Financial Consulting Senior Associate', 'As a Senior Associate, you’ll work as part of a team of problem solvers with extensive consulting and industry experience, helping our clients solve their complex business issues from strategy to execution.<br><br>Requirements:<br>MBA<br><br>Preferred Skills:<br>- Demonstrates proven thorough knowledge with the design of operational metrics to support strategic plans, dashboard design and benchmarking/standard industry practices. - Demonstrates the ability to write and deliver proposals to prospective clients. - Demonstrates experience as a team leader: creating a positive environment by monitoring workloads of the team while meeting client expectations and respecting the work-life quality of team members; providing candid, meaningful feedback in a timely manner; and keeping leadership informed of progress and issues. ');
  dropdownManipulator.handleChoice(3, '.right', 'Financial Planning and Analysis Sr Associate', "A career in our Financial Operations practice, within Finance Consulting services, will provide the opportunity to work alongside CEOs, CFOs, controllers, and treasurers to optimize the structure of their finance functions and improve their contribution to the business. As a Senior Associate, you’ll work as part of a team of problem solvers with extensive consulting and industry experience, helping our clients solve their complex business issues from strategy to execution.<br><br>Requirements:<br>4 years of experience, a master's degree in accounting, business administration, or finance<br><br>Preferred Skills:<br>Demonstrates some proven knowledge and success in advising global organizations on improving efficiency and effectiveness in transaction processing, close and consolidation, budgeting and forecasting, and internal and external reporting.");
  dropdownManipulator.handleChoice(4, '.right', 'International Tax Senior Associate', 'A career within International Tax services will provide you with the opportunity to help multinational companies address their cross border tax needs both locally and globally by managing their global tax rates, finding areas of cost reduction, and responding to inquiries from regulatory authorities.<br><br>Requirements:<br>Bachelor Degree in Accounting, CPA, 3 years of experience<br><br>Preferred Skills:<br>Considerable knowledge of corporate tax including tax research, compliance and consulting within an international taxation environment. Working knowledge of assisting companies to understand and assess the tax impact of company business, operations and transactions in multiple jurisdictions. Proficient technical skills in structural realignment, cash and financial statement effective tax rate analysis and improvement of tax efficiencies of cross-border flows.');

  $('.panel').hover(function () {
    let classed = this.className;
    console.log(classed);

    if (classed.search('B') > 0 || classed.search('D d') > 0 || classed.search('E e') > 0  || classed.search('A a') > 0 || classed.search('A5') > 0 || classed.search('C c') > 0 || classed.search('notimed viz') > 0) {
      $('.nav .menu-open').addClass('invertedColors');
      $('.nav .back').addClass('invertedColors');
    } else if (classed.search('A3') > 0 || classed.search('A1') > 0) {
      $('.nav .menu-open').addClass('invertedColors');
      $('.nav .back').removeClass('invertedColors');
    } else if (classed.search('A2') > 0 || classed.search('A4') > 0) {
      $('.nav .menu-open').removeClass('invertedColors');
      $('.nav .back').addClass('invertedColors');
    } else {
      $('.nav .menu-open').removeClass('invertedColors');
      $('.nav .back').removeClass('invertedColors');
    }

    if (classed.search('C c') > 0) {
      $('.C').attr('id', 'particles-js');
      $('.D').removeAttr('particles-js');
      $('.E').removeAttr('particles-js');
    } else if (classed.search('D d') > 0) {
      $('.D').attr('id', 'particles-js');
      $('.C').removeAttr('particles-js');
      $('.E').removeAttr('particles-js');
    } else if (classed.search('E e') > 0) {
      $('.E').attr('id', 'particles-js');
      $('.D').removeAttr('particles-js');
      $('.C').removeAttr('particles-js');
    }
  });

  //Contact page validation/tabbing
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      $('body').addClass('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  };

  $('.D form').mousemove(function() {
    $('body').removeClass('user-is-tabbing');
    window.addEventListener('keydown', handleFirstTab);
  });

  $(':input[type=number]').on('mousewheel', function(e){
    e.preventDefault();
  });

  window.addEventListener('keydown', handleFirstTab);

  // stories page
  $('.seemore').click(function() {
    $('.morestories').removeClass('fadeOutDown');
    $('.seemore').removeClass('fadeIn');
    $('.morestories').addClass('fadeInUpBig');
    $('.seemore').addClass('fadeOut');
    $('.morestories').show();
    $('.up').hide();
  });

  $('.doneseeing').click(function() {
    $('.morestories').removeClass('fadeInUpBig');
    $('.seemore').removeClass('fadeOut');
    $('.morestories').addClass('fadeOutDown');
    $('.seemore').addClass('fadeIn');
    $('.seemore').show();
    $('.up').show();
  });

  $('.morestorieslist').children('.story').each(function () {
    $(this).hover(function(event) {
      $(this).children('.awoverlay').removeClass('fadeOutDownBigSlow');
      $(this).children('.awoverlay').addClass('fadeInUp');
      $(this).children('.awoverlay').show();
    }, function(event) {
      $(this).children('.awoverlay').removeClass('fadeInUp');
      $(this).children('.awoverlay').addClass('fadeOutDownBigSlow');
    });
  });

  $('.stories').children('.story').each(function () {
    $(this).hover(function(event) {
      $(this).children('.awoverlay').removeClass('fadeOutDownBigSlow');
      $(this).children('.awoverlay').addClass('fadeInUp');
      $(this).children('.awoverlay').show();
    }, function(event) {
      $(this).children('.awoverlay').removeClass('fadeInUp');
      $(this).children('.awoverlay').addClass('fadeOutDownBigSlow');
    });
  });

  // sponsors page
  let moreSponOpen = false;
  let arconic = false;

  setTimeout(function() {
    setInterval(function() {
      if (arconic) {
        arconic = false;
        $(".big3 .third").css('opacity', '0');
        $('.big3 .third').css('margin', '10vh 0 10vh 0');
        setTimeout(function() {
          $(".big3 .third").attr("src","css/images/rockwellcollins.png");
          $(".big3 .third").css('opacity', '1');
        }, 1000);
      } else {
        arconic = true;
        $(".big3 .third").css('opacity', '0');
        $('.big3 .third').css('margin', '0');
        setTimeout(function() {
          $(".big3 .third").attr("src","css/images/arconic.png");
          $(".big3 .third").css('opacity', '1');
        }, 1000);
      }
    }, 6000);
  }, 4000);

  $('.seemores').click(function() {
    $('.faq').removeClass('fadeOutDown');
    $('.seemores').removeClass('fadeIn');
    $('.faq').addClass('fadeInUpBig');
    $('.seemores').addClass('fadeOut');
    $('.faq').show();
    moreSponOpen = true;
  });

  $('.closeaptfaq').click(() => {
    if (moreSponOpen) {
      $('.faq').removeClass('fadeInUpBig');
      $('.seemores').removeClass('fadeOut');
      $('.faq').addClass('fadeOutDown');
      $('.seemores').addClass('fadeIn');
      $('.seemores').show();
      moreSponOpen = false;
    } else {
      $('.viz').show();
      hideSponsors();
    }
  });

  $('.nextqs').click(() => {
    if ($('.nextqs').attr('src') == 'css/images/backwardw.png') {
      $('.qanda').removeClass('fadeInRightBig');
      $('.anotherqanda').removeClass('fadeOutLeftBig');
      $('.qanda').addClass('fadeOutRightBig');
      $('.anotherqanda').addClass('fadeInLeftBig');
      $('.anotherqanda').show();
      $('.nextqs').attr('src', 'css/images/forward.png');
    } else {
      $('.qanda').removeClass('fadeOutRightBig');
      $('.anotherqanda').removeClass('fadeInLeftBig');
      $('.qanda').addClass('fadeInRightBig');
      $('.anotherqanda').addClass('fadeOutLeftBig');
      $('.nextqs').attr('src', 'css/images/backwardw.png');
    }
  });
});

//classes for a
class panelAndDefaults {
  constructor() {
    this.textString = '';
    this.titleString = '';
    this.textOptions = {
      strings: [" ", this.textString],
      typeSpeed: 5,
      backSpeed: 0.1,
      showCursor: false,
      onComplete: (self) => {
        this.picChose1 = false;
      }
    };
    this.titleOptions = {
      strings: [" ", this.titleString],
      typeSpeed: 30,
      backSpeed: 15,
      showCursor: false,
      onComplete: (self) => {
        this.picChose = false;
      }
    };
    this.titleTyped;
    this.textTyped;
    this.picChose = false;
    this.picChose1 = false;
  }

  newPanel(titleString, textString, panel, side) {
    if (!this.picChose && !this.picChose1) {
      titleString = titleString.toUpperCase();
      this.titleOptions.strings[1] = titleString;
      this.textOptions.strings[1] = textString;
      $('.line').hide();
      setTimeout(() => {$('.line').show()}, 1000);
      this.titleTyped = new Typed(`${panel} ${side} .title`, this.titleOptions);
      this.textTyped = new Typed(`${panel} ${side} .maintext`, this.textOptions);
      this.textTyped.start();
      this.picChose = true;
      this.picChose1 = true;
    }
  }
}

// class for b1 b2 sections
class sectionMan {
  constructor() {
    this.sections = [];
  }

  checkSec(panel) {
    if (panel == '.B1') {
      this.sections = ['.topleft', '.topright', '.botleft', '.botright'];
    } else if (panel == '.B2') {
      this.sections = ['.topleft', '.topright', '.botleft', '.botright'];
    } else {
      console.log("Invalid panel");
    }
  }
  hideAllSecExceptAndEnlarge(not, panel) {
    this.checkSec(panel);
    $(`${panel} .hover`).hide();
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i] == not) {
        $(`${panel} .sections ${this.sections[i]}`).addClass('enlarged');
        $(`${panel} .sections ${this.sections[i]}`).addClass('imggone');
        $(`${panel} .sections button`).hide();
        $(`${panel} .sections .infolabel`).hide();
        $(`${panel} .sections .infotext`).show();
        $(`${panel} .sections .boxtitle`).show();
      } else if (this.sections[i] !== not) {
        $(`${panel} .sections ${this.sections[i]}`).hide();
        $(`${panel} .sections ${this.sections[i]}`).removeClass('enlarged');
      }
    }
    setTimeout(function() {
      $(`${panel} .sections .closeSec`).fadeIn(500);
    }, 1000);
  }
  showAllSec(panel) {
    this.checkSec(panel);
    $(`${panel} .hover`).show();
    for (let i = 0; i < this.sections.length; i++) {
      $(`${panel} .sections ${this.sections[i]}`).removeClass('imggone');
      $(`${panel} .sections ${this.sections[i]}`).removeClass('enlarged');
      $(`${panel} .sections button`).show();
      $(`${panel} .sections .infolabel`).show();
      $(`${panel} .sections .infotext`).hide();
      $(`${panel} .sections .boxtitle`).hide();
      $(`${panel} .sections ${this.sections[i]}`).show();
    }
  }
}

// classes for b3 section
let dropdownleftopen = false;
let dropdownrightopen = false;
class dropdownMan {
  constructor(panel, outputarea) {
    this.panel = panel;
    this.outputarea = outputarea;
    this.titleOptions = {
      strings: [" ", ""],
      typeSpeed: 30,
      backSpeed: 15,
      showCursor: false,
      onComplete: (self) => {
        this.optionSelected = false;
      }
    };
    this.textOptions = {
      strings: [" ", ""],
      typeSpeed: 5,
      backSpeed: 0.1,
      showCursor: false,
      onComplete: (self) => {
        this.optionSelected1 = false;
      }
    };
    this.titleTyped;
    this.textTyped;
    this.optionSelected = false;
    this.optionSelected1 = false;
  }

  handleChoice(selected, section, title, output) {
    $(`${this.panel} ${section} .dropdown .dropmenu .dropsel${selected}`).click(() => {
      if (!this.optionSelected && !this.optionSelected1) {
        let editedTitle = title.split('').join('\xa0').toUpperCase();
        this.titleOptions.strings[1] = editedTitle;
        this.textOptions.strings[1] = output;
        this.titleTyped = new Typed(this.outputarea[0], this.titleOptions);
        this.textTyped = new Typed(this.outputarea[1], this.textOptions);
        this.optionSelected = true;
        this.optionSelected1 = true;
        if (section == '.left') {
          setTimeout(function() {
            $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
            $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
            $('.B3 .left .dropdown .dropmenu .dropsel').fadeOut(1500);
            $('.B3 .left .dropdown .droplabel img').removeClass('flip180');
            $('.B3 .left .dropdown .droplabel img').addClass('unflip180');
          }, 500);
          dropdownleftopen = false;
        } else if (section == '.right') {
          setTimeout(function() {
            $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
            $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
            $('.B3 .right .dropdown .dropmenu .dropsel').fadeOut(1500);
            $('.B3 .right .dropdown .droplabel img').removeClass('flip180');
            $('.B3 .right .dropdown .droplabel img').addClass('unflip180');
            dropdownrightopen = false;
          }, 500);
        }
      }
    });
  }
}
