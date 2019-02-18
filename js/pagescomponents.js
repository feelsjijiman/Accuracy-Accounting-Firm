import { hideSponsors } from './maintest.js';

$(window).on("load", function() {
  document.addEventListener('touchmove', function(e) {
        e.preventDefault();
  }, false);

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
  a2Maker.newPanel("p r o g r a m m i n g", "Programming serves as a key part of the FTC competition, making our robot move based on the controller and also sensors. Our four programmers help develop Java code for Autonomous and TeleOp, bringing us up on top. We practice together, discussing issues and testing prototypes of our programs. In the end, we aim to build a great program to perform our best.", ".A2", ".leftside");

  //all the configs
  let ericSection = false;
  let currentBio = 0;
  $('.A2 .rightside .images .imgtopleft').click(function() {
    ericSection = false;
    currentBio = 0;
    a2Maker.newPanel("j o s h u a", "The Captain of the Programming Division, Joshua oversees the creation of the autonomous and tele-op programs. He also made various side programs, including one for presentations and another that can play music. Joshua enjoys programming games, playing chess, and spending time with friends and family.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomleft').click(function() {
    ericSection = true;
    a2Maker.newPanel("e r i c", "As a Team Lawyer, Eric, aka h0dL - 3 - Jumpman - Ankle Bully, who's in 8th grade, understands the rulebook front to back, in addition to programming the encoder-based autonomous program on the Crater Side. He enjoys programming, playing basketball, and Bitcoin.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomright').click(function() {
    ericSection = false;
    currentBio = 0;
    a2Maker.newPanel("d a n i e l", "As Captain of Multimedia, Daniel programs our website in addition to the robot. He created the current website, and also the time-based autonomous programs for the competition. He enjoys learning new programming languages, playing basketball, and HODLING.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottommiddle').click(function() {
    ericSection = false;
    currentBio = 0;
    a2Maker.newPanel("p r o g r a m m i n g", "Programming serves as a key part of the FTC competition, making our robot move based on the controller and also sensors. Our four programmers help develop Java code for Autonomous and TeleOp, bringing us up on top. We practice together, discussing issues and testing prototypes of our programs. In the end, we aim to build a great program to perform our best.", ".A2", ".leftside");
  });
  $('.A2 .leftside .title').click(function() {
    if (ericSection) {
      if (currentBio == 0) {
        currentBio++;
        a2Maker.newPanel("e r i c", "As an Ankle Bully, Eric hands out subscriptions for Ankle Support. Cause you need ya ankle braces, Run from the Ankle Bully, Cause I'm out here ankle breakin, You know I'm the Ankle Bully. The number, its 1-800-Nobody-Is-Stopping-That-Boy. Eric has a strict diet: I'm cooking them ankles for breakfast Look how I'm making 'em scramble. Anyways, fear the Ankle Bully.", ".A2", ".leftside");
      } else if (currentBio == 1) {
        currentBio++;
        a2Maker.newPanel("e r i c", "Jumpman, Jumpman, Jumpman, Jumpman, Jumpman, Jumpman. woo! Eric, is also the Jumpman. I just found my tempo like I'm DJ mustard woo! I hit the Ginobili with my left hand up like woo! Bentley Spurs and Phantoms Jordan Fadeaway! Jumpman, Jumpman, live on TNT I'm flexing (ooh!) Jumpman, Jumpman they gave me my own collection (ooh!) I'm the Jumpman!", ".A2", ".leftside");
      } else if (currentBio == 2) {
        currentBio++;
        a2Maker.newPanel("e r i c", "Eric, a.k.a. h0dL - 3, is an og hodler. His newtab page displays Bitcoins current price, and he understands the concept of BTFD. (Buy The F***ing Dip).  I ain’t got time for the haters man (no) We about to grow to a million (grow) HODL GANG, HODL GANG, HODL GANG (ohhhh) Tell me, are you down with the crypto? HODL", ".A2", ".leftside");
      } else if (currentBio == 3) {
        currentBio = 0;
        a2Maker.newPanel("e r i c", "As a Team Lawyer, Eric, aka h0dL - 3 - Jumpman - Ankle Bully, who's in 8th grade, understands the rulebook front to back, in addition to programming the encoder-based autonomous program on the Crater Side. He enjoys programming, playing basketball, and Bitcoin.", ".A2", ".leftside");
      }
    }
  });
  $('.A3 .leftside .images .imgbottomright').click(function() {
    a3Maker.newPanel("K E V I N", "As Maintenance Captain for our team, Kevin is a builder during practice but also a emergency builder during competition. Kevin contributes a good majority of the robot, mainly the hanging mechanism and the scoring mechanism. Kevin is also the driver coach, guiding them during matches. He helps with Programming Documentation, making sure everything gets done on time. When Kevin’s not doing robotics, he watches anime, plays games with friends, and practices badminton. ", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgbottomleft').click(function() {
    a3Maker.newPanel("K A W I N", "Kawin stands as the Robot Captain, overlooking the robot from start to end. He is a key builder for our robot, starting from assembling the chassis to last-minute fixes. Other than that, Kawin works on the Promote video and helps out other team members with mechanical issues. At school, Kawin is part of the marching band; at home, he watches anime.", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgbottommiddle').click(function() {
    a3Maker.newPanel("B U I L D I N G", "Without a robot, we would never win a competition. Where other category members can’t fill in, we have Building members swoop in to build the robot. Through all the work and dedication, the 5 main builders have constructed the base, scoring mechanism, intake system, protection safeties, and wiring setups. Just to name a few, they use power tools, brackets, channels, zip ties, a variety of nuts and bolts, hammers, and plexiglass to construct the robot. ", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopleft').click(function() {
    a3Maker.newPanel("G L O R Y", "Glory, Electrician Captain, helps with organizing the wires and wiring the robot. With the use of zip ties, she prevents the wires from turning into a spaghetti like mess and interfering with the robot’s mechanisms. She is also a scouter and keeps track of game points during practice runs and meets. She is a neat freak who enjoys reading and talking to plants.", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopright').click(function() {
    a3Maker.newPanel("I A N", "Ian Ceballos is an eight grader at Suzanne Middle School, who is also part of team Wolf Corp. He plays basketball, training himself at least three days a week. He also often indulges himself in the card game, Yu-Gi-Oh!. On Wolf Corp, he is the main driving captain, who strives to perfect his technique controlling the robot and maximizing its capabilities. A somewhat Jack of all trades, he is also part of other departments such as building and Engineering Notebook management.", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopmiddle').click(function() {
    a3Maker.newPanel("G O R D O N", "CAD Captain Gordon works on 3D documenting the robot and helps to build the robot. Gordon’s CAD (Computer-Aided Design) files are useful for taking a look at our robot at angles we usually can’t do physically. It also helps share our ideas with the rest of the world, so they can build and learn off it. CAD helps prototype the robot on a computer so that it wouldn’t break when we build it. When building it, he also helps out. Other than robotics, Gordon plays on the golf team and is a tech and anime enthusiast.", ".A3", ".rightside");
  });

  $('.A4 .rightside .images .imgbottomright').click(function() {
    a4Maker.newPanel("e v a n", "Evan is the head of Financing for our team, serving as the UCTA for Wolf Corp. He manages our balances and regularly inputs spendings and raised money. Evan also contributes to building the robot to give an extra hand. He works with Google Sheets and lots of numbers. Evan enjoys gaming, playing basketball, and practicing piano.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottomleft').click(function() {
    a4Maker.newPanel("s a r a h", "Sarah controls the Engineering Notebook, an important part of the . It keeps all the documents of our team, even what we have as snacks for each practice. Sarah also meets with businesses in person, asking for a funding to keep our team going. Sarah loves to listen to music, watch the newest movies, and hang out with friends.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottommiddle').click(function() {
    a4Maker.newPanel("b u s i n e s s", "Although it may not seem like it, Business members are vital to having a functional team. Business controls our external relationships with businesses, experts and outreach events, while also doing documentation and scouting for competition. They find places to spread the world of STEM, attract sponsors to support our team, invite experts over to give us tips, manage the Engineering Notebook, and get information about who could benefit us as an Alliance. Business members always try to keep track of our programming and building progress as well, so we can accurately recollect of what we have done. They fill the Engineering Notebook with great details about our team’s accomplishments and hope to inspire kids to do as great.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopleft').click(function() {
    a4Maker.newPanel("j a s o n", "Jason works on the Engineering Section for our team, drives the robot during the competition, and helps build and maintain the robot. In the Engineering Section, Jason includes the robot’s mechanisms and functionalities. When he’s not doing robotics, he plays games, dragonboats, and practices the handbell.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopright').click(function() {
    a4Maker.newPanel("c o n o r", "Conor oversees Documentation for our team. He ensures that anything from fundraising to Autonomous runs is recorded down, either on paper or online. Conor also keeps check on the robot, making sure it’s not broken or fixing it when it is. In his free time, Conor reads, sleeps, and plays with his dog Tara.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopmiddle').click(function() {
    a4Maker.newPanel("n a t h a n", "Nathan is the Business leader for Wolf Corp and supervises all main operations in the category. He reaches out to businesses as a part of that, looking for some to support our team. Besides that, he is also a builder, scouter, and outreach documenter. Nathan likes to play PC games, swim, listen to music, and practice the piano.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgextra').click(function() {
    a2Maker.newPanel("c h a n d r a r k", "Chandrark is the Head of Scouting and Team Statistician. For Scouting, he manages all the scouting reports from competition and analyzes them to determine the best alliance. As Statistician, Chandrark records all the Driving and Autonomous testing to better display what we can work on and how to get better. For fun, Chandrark watches TV and plays video games like Overwatch, Fortnite, and Super Smash Bros.", ".A4", ".leftside");
  });

  $('.A5 .botside .images .imgfarleft').click(function() {
    a5Maker.newPanel("c o n n e c t i n g \xa0\xa0w i t h \xa0\xa0o t h e r s", "As Wolf Corp., our goal is to inspire other kids to work as a team and get involved in STEM education. The robot isn’t the only part of the competition, and we never aim to just get first place in the competition. Truly impacting the community and people around us to be excited about robotics and STEM is what we aspire to do. Instead of just focusing on our team, we aim to influence brilliant teenagers and kids to improve the world.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaleft').click(function() {
    a5Maker.newPanel("o u r \xa0\xa0r o b o t i c s \xa0\xa0c l u b", "At Walnut High School, we were able to set up the first robotics club to encourage our school to learn more about STEM and robotics. We inspired two teachers, Ms. Lindemann and Mr. Madrid, to help support our cause and become our advisors. Mr. Madrid helps out on the advisor-required meetings and has useful tips for running the club. We have meetups every other Tuesday during lunch at Ms. Lindemann’s classroom, to discuss our robot and teach them some new information. Students can come anytime during the season and is open to everyone. Our club has successfully connected Walnut High to FIRST.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgmidleft').click(function() {
    a5Maker.newPanel("o u t r e a c h", "Outreaches help us connect to all ages and get them thinking about the STEM field. We have done more than 70 outreaches around the region, such as at Pasadena Library, Imaginology Expo, and LA Fair. We’ve gone to all these places to showcase our robots and let children from 3 years old to adults interested in our team to try driving it and picking up blocks. Without outreaches, people wouldn’t know about a great revolution happening in technology.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgmidright').click(function() {
    a5Maker.newPanel("h a v i n g \xa0\xa0a \xa0\xa0h e a r t \xa0\xa0o f \xa0\xa0h o p e", "Wolf Corp also emphasizes helping the disadvantaged and strive to bring happiness and great experiences to them through robotics. For example, we visit non-profit organization Heart of Hope to host a STEM activity once a month for more than 60 special needs children and adults. Our goal is to help connect them to the real world by using the FIRST program. We participated in the Autism Walk, Relay for Life, and the Walnut city Trunk or Treat in order to give back to our community. In addition, we raised money to support the American Cancer Society. Caring for others is a moral we should have in doing anything, not just robotics.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaright').click(function() {
    a5Maker.newPanel("e x p e r t s", "Our team has connected to more than 20 STEM experts for knowledge. For example, we visited Walnut Valley Robotics to learn about electrical power tools. We met with Dr. Spiros, the Manager of Outreach at CalTech. He reviewed our outreaches and encouraged us to do more. Also, Mr. Jacob, a JPL robotics engineer helped us with our scoring mechanism issue and suggested we have a pre-check and post-check for our robot before and after a match. We went to the “Crush Master and Grinding Company” who gave us a tour and introduced us to CNC and WATER JET machines which they later used to cut multiple pieces for our robot. Experts are always a big help to us, and are a great part of the community.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgfarright').click(function() {
    a5Maker.newPanel("f i r s t \xa0\xa0 v o l u n t e e r i n g", "From helping other teams to holding workshops, we also encourage other teams to do their best. Our team mentored multiple FLL teams such as HEXA Challengers who are advancing to the World Festival this year. At the beginning of the season, we hosted 2 programming workshops for 12 new coaches at Suzanne Middle school. Every summer, we host a robotics workshop at the walnut library where we teach kids how to build and program robots. We also held 2 workshops for new FTC teams and volunteered at 3 FLL and 2 FTC tournaments.", ".A5", ".topside");
  });

  $('.B1 .sections .topleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B1');
    setTimeout(function(){$('.compvideo').fadeIn();}, 300);
  });
  $('.B1 .sections .topright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B1');
  });
  $('.B1 .sections .botleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B1');
  });
  $('.B1 .sections .botright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B1');
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
  $('.B2 .sections .topright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B2');
  });
  $('.B2 .sections .botleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B2');
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
  $('.B2 .sections .topmid button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topmid', '.B2');
  });
  $('.B2 .sections .botmid button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botmid', '.B2');
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
  dropdownManipulator.handleChoice(1, '.left', 'Chassis', 'The chassis of our robot is an Andymark build which helped us save a lot of time. The base is very stable and tight, so nuts and screws won’t get loose and maintenance for it is at a minimum. The parts are mainly metal, with the exception of a plexiglass bottom.  It carries the weight of everything else and so far has done a great job during the season.');
  dropdownManipulator.handleChoice(2, '.left', 'Protectors', 'On the sides of the robot are plexiglass protectors to keep our robot intact. They help absorb shock, so an accidental hit won’t disconnect our robot. Wires and Expansion Hubs on our robot are protected by it, as well as the phone. It prevents direct contact of virtually anything to our core. With the two protectors, we can rest assured that disconnections won’t happen.');
  dropdownManipulator.handleChoice(3, '.left', 'Sensors', 'For our Autonomous to operate properly, we have a camera and encoders added onto our robot for accurate and correct movement. The camera is just the phone’s built-in one, but the encoders are additionally added to use in pair with our AndyMark Neverest 40 motors. Both are reliable but have to be configured carefully to work properly. The camera detects gold blocks using a program, while the encoder counts the revolutions the motor takes and uses it to move correctly. With these sensors, we don’t have to rely on a timer to make the right move.');
  dropdownManipulator.handleChoice(4, '.left', 'Channels, Gears, and More', 'For all the non-moving parts we put on ourselves, we always make sure to fasten them properly and tightly. Most metal pieces we use are Actobotics, so we can easily combine one and one. Some parts we may not have, so we either 3D print it or ask a like company CNC to graciously help us make it. Zip ties are also a big help for temporarily connecting two things, and we also have a huge variety of them. These parts may not sound that important, but together, help hugely in the long run.');
  dropdownManipulator.handleChoice(1, '.right', 'Wheels', 'The four wheels are the essential part for movement of our whole robot. They are all mecanum wheels, with AndyMark Neverest 40 motors. They all have a diameter of 4 inches and provide the ability to move forward, back, sidestep left, sidestep right, turn either direction and even move and turn at the same time (like drifting without the brake). With the four wheels, we can move quickly from the lander to crater to score gold as well as get full points in Autonomous just in time. The wheels have encoders attached too, measuring 1120 CPR (counts per revolution) and 4480 counts for a tile. With our wheels, our robot can move very well in multiple ways regardless if Autonomous or Tele-Op.');
  dropdownManipulator.handleChoice(2, '.right', 'Intake System', 'The intake system is the first step of a two-step process of scoring minerals. It consists of an x rail for extending a tray with two servos: one that controls a zip tie intake and the other that flips the tray into the second system. The intake system is able to reach out from outside of the crater using an x rail to grab minerals. Once inside, the zip ties take in up to two minerals and the x rail retracts. Once it retracts, the tray flips and turns the minerals into the deposit system. This method is fast and only has a short delay when taking in the minerals. ');
  dropdownManipulator.handleChoice(3, '.right', 'Deposit System', 'As the second part of our robot’s scoring process, it takes from the intake system and drops it into the lander. The deposit system has a tray and x rail as well, with a servo on the tray connected to a sheet of plexiglass preventing the minerals from sliding and another servo connected to zip ties on the tray. When the intake system turns over the tray, it falls into the deposit systems tray. The intake system is turned back, and its linear slide raises the deposit system above the lander. The servo rotates up the closed plexiglass and the other servo uses zip ties to push off the minerals. This pairs well with the intake system and leads to effective scoring.');
  dropdownManipulator.handleChoice(4, '.right', 'Hanging', 'Hanging for our robot is one the big points in End Game and Autonomous. We use a motor to turn a gear which in turn (get it) turns a threaded rod that moves the hanging bar up and down. The AndyMark 60 motor provides enough strength and has large enough stall torque to prevent it from burning out and continue to lift it up from the ground. It takes about 6 seconds to unhang and hang from the lander, resulting in a total of 85 points. Without hanging, winning matches would be very hard.');

  $('.panel').hover(function () {
    let classed = this.className;
    console.log(classed);

    if (classed.search('B') > 0 || classed.search('D d') > 0 || classed.search('E e') > 0  || classed.search('A a') > 0 || classed.search('A5') > 0 || classed.search('C c') > 0 || classed.search('A1') > 0 || classed.search('notimed viz') > 0) {
      $('.nav .menu-open').addClass('invertedColors');
      $('.nav .back').addClass('invertedColors');
    } else if (classed.search('A3') > 0) {
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
      this.sections = ['.topleft', '.topright', '.botleft', '.botright', '.botmid', '.topmid'];
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

let frogRaid = false;
var frog = {70: false, 82: false, 71: false};
$(document).keydown(function(e) {
  if (frogRaid) {
    if (e.keyCode in frog) {
      frog[e.keyCode] = true;
      if (frog[70] && frog[82] && frog[71]) {
        $(".A2 .imgbottomright").attr("src","css/images/daniel.png");
        $(".A2 .imgtopleft").attr("src","css/images/josh.png");
        $(".A2 .imgbottomleft").attr("src","css/images/eric.png");
        $(".A3 .imgbottomright").attr("src","css/images/kevin.png");
        $(".A3 .imgtopleft").attr("src","css/images/glory.jpg");
        $(".A3 .imgbottomleft").attr("src","css/images/kawin.png");
        $(".A3 .imgtopmiddle").attr("src","css/images/gordo.png");
        $(".A3 .imgtopright").attr("src","css/images/ian.png");
        $(".A4 .imgbottomright").attr("src","css/images/evan.jpg");
        $(".A4 .imgtopleft").attr("src","css/images/jason.png");
        $(".A4 .imgbottomleft").attr("src","css/images/sarah.png");
        $(".A4 .imgextra").attr("src","css/images/chandrark.jpg");
        $(".A4 .imgtopright").attr("src","css/images/conor.png");
        $(".A4 .imgtopmiddle").attr("src","css/images/nathan.png");
        frog[70] = false;
        frog[82] = false;
        frog[71] = false;
        frogRaid = false;
      }
    }
  } else {
    if (e.keyCode in frog) {
      frog[e.keyCode] = true;
      if (frog[70] && frog[82] && frog[71]) {
        $(".A2 .imgbottomright").attr("src","css/images/Frog1.jpg");
        $(".A2 .imgtopleft").attr("src","css/images/Frog2.jpg");
        $(".A2 .imgbottomleft").attr("src","css/images/Frog3.jpg");
        $(".A3 .imgbottomright").attr("src","css/images/Frog4.jpg");
        $(".A3 .imgtopleft").attr("src","css/images/Frog5.jpg");
        $(".A3 .imgbottomleft").attr("src","css/images/Frog6.jpg");
        $(".A3 .imgtopmiddle").attr("src","css/images/Frog7.jpg");
        $(".A3 .imgtopright").attr("src","css/images/Frog8.jpg");
        $(".A4 .imgbottomright").attr("src","css/images/Frog9.jpg");
        $(".A4 .imgtopleft").attr("src","css/images/Frog10.jpg");
        $(".A4 .imgbottomleft").attr("src","css/images/Frog11.jpg");
        $(".A4 .imgextra").attr("src","css/images/Frog12.jpg");
        $(".A4 .imgtopright").attr("src","css/images/Frog13.jpg");
        $(".A4 .imgtopmiddle").attr("src","css/images/Frog14.jpg");
        frog[70] = false;
        frog[82] = false;
        frog[71] = false;
        frogRaid = true;
      }
    }
  }
});
$(document).keyup(function(e) {
    if (e.keyCode in frog) {
        frog[e.keyCode] = false;
    }
});
