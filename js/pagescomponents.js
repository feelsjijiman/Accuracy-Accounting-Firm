import { hideSponsors } from './maintest.js';

$(window).on("load", function() {
  try {
    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);
  } catch {
    console.log("no trademark!")
  }
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
  $('.codesnippet').hide();
  $('.anotherqanda').hide();
  $('.client').hide();
  $('.A2, .A3, .A4, .A5, .B1, .B2, .B3').hide();
  //declaring instances
  const a2Maker = new panelAndDefaults();
  const a3Maker = new panelAndDefaults();
  const a4Maker = new panelAndDefaults();
  const a5Maker = new panelAndDefaults();
  const secEditor = new sectionMan();
  const dropdownManipulator = new dropdownMan('.B3', ['.B3 .middle .title', '.B3 .middle .infofromsides']);
  //all the configs
  let currentBio = 0;
  $('.A2 .rightside .images .imgtopleft').click(function() {
    currentBio = 0;
    a2Maker.newPanel("b e n e f i t s", "Accuracy Accounting offers personalized and professional help to our clients who need help with taxes. Our firm will help individuals and businesses to:<br>- Identify and reduce tax risks.<br>- Utilize tax strategies that complement the client.<br>- Prepare the required forms and make sure to record all calculations accurately.<br>- Review and verify that tax filings have been completed and submitted correctly.<br>- Certify that your financial reporting practices are within current IRS regulations.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomleft').click(function() {
    a2Maker.newPanel("o u r \xa0\xa0p r o c e s s", "There are also different types of taxes depending on various business activities, like selling taxable products or services, using equipment, owning business property, and being self-employed. These are just some of the tax services we provide:<br>- Income Tax: All businesses must pay tax on their income; that is, the business must pay tax on the profit of the company.<br>- Sales Tax: Merchants in most states are required to collect sales tax and pay it to the state department of revenue.<br>- Property Tax: Businesses that own real property, like a building, must pay property tax to the local taxing authority.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottommiddle').click(function() {
    currentBio = 0;
    a2Maker.newPanel("t a x", "Taxes are a mandatory financial charge levied upon an individual or corporation by the state or federal government. These funds are then deposited towards public expenses. Often times, filing for taxes are complicated and tedious, so this is where we step in!", ".A2", ".leftside");
  });

  $('.A3 .leftside .images .imgbottomleft').click(function() {
    a3Maker.newPanel("b e n e f i t s", "Bookkeeping will provide large benefits for your business because organized financial records and balanced finances are central to your success. Our services will make sure that:<br>- The process is done accurately and completely.<br>- We will use a bookkeeping system that accommodates your business.<br>- We will manage the transactions brought in through your accounting system’s bank feed.", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgbottommiddle').click(function() {
    a3Maker.newPanel("o u r \xa0\xa0p r o c e s s", "The complexity of the bookkeeping process depends on the size of your business and the number of transactions conducted. Nowadays, the process is heavily automated. There are two methods of bookkeeping which we both provide:<br>- Single-entry: A single entry system records each accounting transaction with a single entry to the accounting records.<br>- Double-entry: Every entry to an account requires a corresponding and opposite entry to a different account.", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopleft').click(function() {
    a3Maker.newPanel("b o o k k e e p i n g", "Bookkeeping services allow a company to develop and maintain their financial processes and management. The basic duties of a bookkeeper are to keep all of a business’s financial transactions documented. They can also handle a company’s payroll, deposits, and create monthly financial reports. Illustration credit: <a href='https://www.vecteezy.com/' style='text-decoration: underline!important;'>vecteezy.com</a>", ".A3", ".rightside");
  });

  $('.A4 .rightside .images .imgbottomleft').click(function() {
    a4Maker.newPanel("o u r \xa0\xa0p r o c e s s", "Financial services is a very broad sector, so it can be divided up into several subparts:<br>- Accounting: Their main job is to record and maintain financial records.<br>- Insurance: Helps businesses reduce the potential chance of financial loss.<br>- Retail/Commercial Banking: These banks do personal and business banking together. They can open savings accounts, accept deposits, lend money, issue credit/debit cards, foreign currency exchanges, and a multitude of other basic services.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopleft').click(function() {
    a4Maker.newPanel("f i n a n c i a l", "Accuracy Accounting advises on key issues such as the impact of risk and regulation, financial crime, innovations in mobile as well as digital technologies. The industry as a whole is vast and includes companies engaged in activities such as investing, lending, insuring, asset management, advising, accounting, and much more!", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottommiddle').click(function() {
    a4Maker.newPanel("b e n e f i t s", "We effectively working with clients as they shape their businesses and execute their strategies. We will:<br>- Use proven methodologies to design and execute business transformation.<br>- Bring the most value to our clients.<br>- Provide greater efficiency and productivity.", ".A4", ".leftside");
  });

  $('.A5 .botside .images .imgfarleft').click(function() {
    a5Maker.newPanel("a p p o i n t m e n t s", "Appointments will be approximately two hours long and booking one is completely free! Just go to the Appointment area of our website and fill in the form!", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaleft').click(function() {
    a5Maker.newPanel("l e v e l \xa0\xa01", "The first level is if your business makes less than $100,000 in revenue a year. We charge $2,500 for every category of services in addition to 2% of your revenue.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaright').click(function() {
    a5Maker.newPanel("l e v e l \xa0\xa02", "The second level is if your business makes less than $1,000,000 in revenue a year. We charge $5,500 for every category of services in addition to 5% of your revenue.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgfarright').click(function() {
    a5Maker.newPanel("l e v e l \xa0\xa03", "The third level is if your business makes more than or equal to $1,000,000 in revenue a year. We charge $7,500 for every category of services in addition to 9% of your revenue.", ".A5", ".topside");
  });

  //b1andb2
  let notSelected = true;
  $('.B1 .sections .topleft button').click(function() {
    notSelected = false;
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B1');
  });
  $('.B1 .sections .topleft').mouseenter(() => {
    if (notSelected) {
      $('.B1 .sections .topleft').addClass('halfgone');
    }
  }).mouseleave(() => {
    $('.B1 .sections .topleft').removeClass('halfgone');
  });
  $('.B1 .sections .topright button').click(function() {
    notSelected = false;
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B1');
  });
  $('.B1 .sections .topright').mouseenter(() => {
    if (notSelected) {
      $('.B1 .sections .topright').addClass('halfgone');
    }
  }).mouseleave(() => {
    $('.B1 .sections .topright').removeClass('halfgone');
  });
  $('.B1 .sections .botleft button').click(function() {
    notSelected = false;
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B1');
  });
  $('.B1 .sections .botleft').mouseenter(() => {
    if (notSelected) {
      $('.B1 .sections .botleft').addClass('halfgone');
    }
  }).mouseleave(() => {
    $('.B1 .sections .botleft').removeClass('halfgone');
  });
  $('.B1 .sections .botright button').click(function() {
    notSelected = false;
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B1');
  });
  $('.B1 .sections .botright').mouseenter(() => {
    if (notSelected) {
      $('.B1 .sections .botright').addClass('halfgone');
    }
  }).mouseleave(() => {
    $('.B1 .sections .botright').removeClass('halfgone');
  });
  $('.B1 .sections .closeSec').click(function() {
    notSelected = true;
    $('.B1 .sections .closeSec').fadeOut(250);
    secEditor.showAllSec('.B1');
  });

  $('.B2 .sections .topleft button').click(function() {
    notSelected = false;
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B2');
  });
  $('.B2 .sections .topleft').mouseenter(() => {
    if (notSelected) {
      $('.B2 .sections .topleft').addClass('halfgone');
    }
  }).mouseleave(() => {
    $('.B2 .sections .topleft').removeClass('halfgone');
  });
  $('.B2 .sections .topright button').click(function() {
    notSelected = false;
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B2');
  });
  $('.B2 .sections .topright').mouseenter(() => {
    if (notSelected) {
      $('.B2 .sections .topright').addClass('halfgone');
    }
  }).mouseleave(() => {
    $('.B2 .sections .topright').removeClass('halfgone');
  });
  $('.B2 .sections .botleft button').click(function() {
    notSelected = false;
    $('.client').show();
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B2');
  });
  $('.B2 .sections .botleft').mouseenter(() => {
    if (notSelected) {
      $('.B2 .sections .botleft').addClass('halfgone');
    }
  }).mouseleave(() => {
    $('.B2 .sections .botleft').removeClass('halfgone');
  });
  let botRightNotClicked = true;
  let running = false;
  $('.B2 .sections .botright button').click(function() {
    notSelected = false;
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B2');
    if (botRightNotClicked) {
        running = true;
        codeSnippetRunCarousel();
        setInterval(function() {codeSnippetRunCarousel()}, 5400);
        botRightNotClicked = false;
    }
  });
  $('.B2 .sections .botright').mouseenter(() => {
    if (notSelected) {
      $('.B2 .sections .botright').addClass('halfgone');
    }
  }).mouseleave(() => {
    $('.B2 .sections .botright').removeClass('halfgone');
  });
  $('.B2 .sections .closeSec').click(function() {
    running = false;
    $('.client').hide();
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
  dropdownManipulator.handleChoice(1, '.left', 'Advisory Financial Services Director', "Accuracy Accounting offers personalized and professional help to our clients who need help with taxes. Our firm will help individuals and businesses to:<br>Identify and reduce tax risks.<br>Utilize tax strategies that complement the client.<br>Prepare the required forms and make sure to record all calculations accurately.<br>Review and verify that tax filings have been completed and submitted correctly.<br>Certify that your financial reporting practices are within current IRS regulations.");
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
    setTimeout(() => {
      $('.C .morestories .morestorieslist .story .awoverlay').show();
    }, 800);
  });

  $('.doneseeing').click(function() {
    $('.morestories').removeClass('fadeInUpBig');
    $('.seemore').removeClass('fadeOut');
    $('.morestories').addClass('fadeOutDown');
    $('.seemore').addClass('fadeIn');
    $('.seemore').show();
    $('.up').show();
  });

  // sponsors page
  let moreSponOpen = false;

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
      typeSpeed: -100,
      backSpeed: -100,
      showCursor: false,
      onComplete: (self) => {
        this.picChose1 = false;
      }
    };
    this.titleOptions = {
      strings: [" ", this.titleString],
      typeSpeed: -3,
      backSpeed: -3,
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
      strings: [" ", this.titleString],
      typeSpeed: -100,
      backSpeed: -100,
      showCursor: false,
      onComplete: (self) => {
        this.picChose = false;
      }
    };
    this.textOptions = {
      strings: [" ", this.textString],
      typeSpeed: -3,
      backSpeed: -3,
      showCursor: false,
      onComplete: (self) => {
        this.picChose1 = false;
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
