function loadNextStep(selectedValue, nextStepId) {
  // Enable the next step
  var nextStepSelect = document.getElementById(nextStepId).querySelector('select');
  nextStepSelect.disabled = false;

  // Simulate AJAX call to get filtered options based on the selected value
  // Replace this with actual data retrieval logic from a server
  var filteredOptions = getFilteredOptions(selectedValue, nextStepId);

  // Update options in the next step
  nextStepSelect.innerHTML = filteredOptions;
}

function getFilteredOptions(selectedValue, nextStepId) {
  // Simulate different options based on the selected value
  switch (nextStepId) {
    case "brandStep":
      switch (selectedValue) {
        case "EG+ London":
          return '<option value="" selected="selected" disabled> Select Brand*</option>' +
            '<option value="Almirall">Almirall</option>' +
            `<option value="AXAIM">AXA IM</option>` +
            `<option value="Bacardi">Bacardi</option>` +
            `<option value="Bayer">Bayer</option>` +
            `<option value="BrownForman">Brown Forman</option>` +
            `<option value="CityFiber">CityFiber</option>` +
            '<option value="ESSO">ESSO</option>' +
            `<option value="ExpediaGroup">Expedia Group</option>` +
            `<option value="ExxonMobil">ExxonMobil</option>` +
            '<option value="Intel">Intel</option>' +
            `<option value="JackDaniels">Jack Daniels</option>` +
            `<option value="Gillette">Gillette</option>` +
            `<option value="HP">HP</option>` +
            `<option value="LEGO">LEGO</option>` +
            `<option value="Mars">Mars</option>` +
            `<option value="Martini">Martini</option>` +
            ` <option value="Medix">Medix</option>` +
            `<option value="Nissan">Nissan</option>` +
            `<option value="Patron">Patron</option>` +
            `<option value="Pfizer">Pfizer</option>` +
            `<option value="QatarTourism">Qatar Tourism</option>` +
            `<option value="other">other</option>` +
            `<option value="Sony">Sony</option>`;
        default:
          return "";
      }
    // ////////////////// switch to client selection //////////////////
    case "clientStep":
      switch (selectedValue) {
        case "ESSO":
        case "AXAIM":
        case "Expedia":
        case "Intel":
        case "ExxonMobil":
        case "ExpediaGroup":
        case "Nissan":
        case "CityFiber":
        case "Sony":
        case "Mars":
        case "HP":
        case "Almirall":
        case "other":
        case "LEGO":
        case "JackDaniels":
        case "Pfizer":
        case "Martini":
        case "Medix":
        case "Patron":
        case "Bacardi":
        case "BrownForman":
        case "Bayer":
        case "Gillette":
        case "QatarTourism":
          return '<option value="" selected="selected" disabled> Client Manager*</option>' +
            '<option value="abigail.marcroft@egplusww.com">Abigail Marcroft</option>' +
            '<option value="adena.phillips@egplusww.com">Adena Phillips</option>' +
            '<option value="adrienne.maginness@egplusww.com">Adrienne Maginness</option>' +
            '<option value="alistair.eglinton@egplusww.com">Alistair Eglinton</option>' +
            '<option value="anastasia.bauer@egplusww.com">Anastasia Baue</option>' +
            '<option value="ankita.kalkani@egplusww.com">Ankita Kalkani</option>' +
            '<option value="jay.cakebread@egplusww.com">Jay Cakebread</option>' +
            '<option value="jack.tierney@egplusww.com">Jack Tierney</option>' +
            '<option value="annabel.dines@egplusww.com">Annabel Dines</option>' +
            '<option value="augusto.machado@egplusww.com">Augusto Machado</option>' +
            '<option value="donna.edgecombe@egplusww.com">Donna Edgecombe</option>' +
            '<option value="federica.guzzo@egplusww.com">Federica Guzzo</option>' +
            '<option value="federica.palmisano@egplusww.com">Federica Palmisano</option>' +
            '<option value="grace.chaicharncheep@egplusww.com">Grace Chaicharncheep</option>' +
            '<option value="sani.al-husseini@egplusww.com">Hassan Al-Husseini</option>' +
            '<option value="henry.bernard@egplusww.com">Henry Bernard</option>' +
            '<option value="jade.fearon@egplusww.com">Jade Fearon</option>' +
            '<option value="jade.patterson@egplusww.com">Jade Patterson</option>' +
            '<option value="jessica.levy@egplusww.com">Jessica Levy</option>' +
            '<option value="kate.hemmings@egplusww.com">Kate Hemmings</option>' +
            '<option value="katherine.page@egplusww.com">Katherine Page</option>' +
            '<option value="katie.cooper@egplusww.com">Katie Cooper</option>' +
            '<option value="leonore.brady@egplusww.com">Leonore Brady</option>' +
            '<option value="lucy.bence@egplusww.com">Lucy Bence</option>' +
            '<option value="maera.halim@egplusww.com">Maera Halim</option>' +
            '<option value="martinivan.leyva@egplusww.com">Martin Ivan Leyva</option>' +
            '<option value="matthew.dale@egplusww.com">Matthew Dale</option>' +
            '<option value="melizza.piedad@egplusww.com">Melizza Piedad</option>' +
            `<option value="other">other</option>` +
            '<option value="mike.karypidis@egplusww.com">Mike Karypidis</option>' +
            '<option value="nikolas.talaiporos@egplusww.com">Nikolas Talaiporos</option>' +
            '<option value="nicola.persico@egplusww.com">Nicola Persico</option>' +
            '<option value="shannon.dunne@egplusww.com">Shannon Dunne</option>' +
            '<option value="steve.hollox@egplusww.com">Steve Hollox</option>';
        default:
          return "";
      }
    // ////////////////// switch to manager selection //////////////////
    case "managerStep":
      switch (selectedValue) {
        case "steve.hollox@egplusww.com":
        case "alistair.eglinton@egplusww.com":
        case "kate.hemmings@egplusww.com":
        case "donna.edgecombe@egplusww.com":
        case "ankita.kalkani@egplusww.com":
        case "katherine.page@egplusww.com":
        case "jade.patterson@egplusww.com":
        case "nicola.persico@egplusww.com":
        case "katie.cooper@egplusww.com":
        case "adrienne.maginness@egplusww.com":
        case "annabel.dines@egplusww.com":
        case "anastasia.bauer@egplusww.com":
        case "jessica.levy@egplusww.com":
        case "augusto.machado@egplusww.com":
        case "adena.phillips@egplusww.com":
        case "abigail.marcroft@egplusww.com":
        case "henry.bernard@egplusww.com":
        case "nikolas.talaiporos@egplusww.com":
        case "lucy.bence@egplusww.com":
        case "federica.palmisano@egplusww.com":
        case "sani.al-husseini@egplusww.com":
        case "grace.chaicharncheep@egplusww.com":
        case "shannon.dunne@egplusww.com":
        case "leonore.brady@egplusww.com":
        case "matthew.dale@egplusww.com":
        case "melizza.piedad@egplusww.com":
        case "federica.guzzo@egplusww.com":
        case "martinivan.leyva@egplusww.com":
        case "other":
        case "mike.karypidis@egplusww.com":
        case "jade.fearon@egplusww.com":
        case "maera.halim@egplusww.com":
          return '<option value="" selected="selected" disabled> Magnon eg+ AM/PM*</option>' +
            '<option value="anshul.tonk@magnon-egplus.com">Anshul Tonk</option>' +
            '<option value="anway.kaushik@magnon-egplus.com">Anway Kaushik</option>' +
            '<option value="ashish.singh@magnon-egplus.com">Ashish Kumar Singh</option>' +
            '<option value="devesh.agnihotri@magnon-egplus.com">Devesh Agnihotri</option>' +
            '<option value="hemant.nagar@magnon-egplus.com">Hemant Nagar</option>' +
            '<option value="mohit.kapoor@magnon-egplus.com">Mohit Kapoor</option>' +
            '<option value="mohd.javed@magnon-egplus.com">Mohd Javed</option>' +
            `<option value="other">other</option>` +
            '<option value="rahul.chauhan@magnon-egplus.com">Rahul Chauhan</option>' +
            '<option value="tania.sinha@magnon-egplus.com">Tania Sinha</option>';

        default:
          return "";
      }
  }
}

function searchJobs() {
  var selectedState = document.getElementById("account").value;
  var selectedbrand = document.getElementById("brand").value;
  var selectedclient = document.getElementById("client").value;
  var selectedmanager = document.getElementById("manager").value;

  console.log(
    "Searching for jobs in:",
    selectedState,
    selectedbrand,
    selectedclient,
    selectedmanager,
    selecteddeliverable,
    selecteddeliverabletype,
  );
}

$('#client').change('change', function (e) {
  $("#clientID").val(this.options[e.target.selectedIndex].value);
});
$('#manager').change('change', function (e) {
  $("#accountManager").val(this.options[e.target.selectedIndex].value);
});
$('#deliverabletype').change('change', function (e) {
  $("#priceing100").val(this.options[e.target.selectedIndex].value);
});

// /////////////////////// other client and manager /////////////////////

// Function to handle client selection change
function clientSelectionChange(select) {
  var selectedValue = select.value;
  var otherClientDetails = document.getElementById('otherClientDetails');
  var clientIDInput = document.getElementById('OtrclientID');

  if (selectedValue === 'other') {
    otherClientDetails.style.display = 'flex'; // Change display to 'flex' to properly show the details
    clientIDInput.disabled = false;
    clientIDInput.value = ''; // Clear the value if it was disabled before
  } else {
    otherClientDetails.style.display = 'none';
    clientIDInput.disabled = true;
    clientIDInput.value = ''; // Clear the value if it was enabled before
  }
}

// Function to handle manager selection change
function managerSelectionChange(select) {
  var selectedValue = select.value;
  var otherManagerDetails = document.getElementById('otherManagerDetails');
  var accountManagerInput = document.getElementById('OtraccountManager');

  if (selectedValue === 'other') {
    otherManagerDetails.style.display = 'flex'; // Change display to 'flex' to properly show the details
    accountManagerInput.disabled = false;
    accountManagerInput.value = ''; // Clear the value if it was disabled before
  } else {
    otherManagerDetails.style.display = 'none';
    accountManagerInput.disabled = true;
    accountManagerInput.value = ''; // Clear the value if it was enabled before
  }
}

// Event listener for client dropdown change
document.getElementById('client').addEventListener('change', function () {
  clientSelectionChange(this);
});

// Event listener for manager dropdown change
document.getElementById('manager').addEventListener('change', function () {
  managerSelectionChange(this);
});


//  deliverable selection

$(document).ready(function () {
  var allOptions = $('#selectprod option').clone();

  $('#selectcat').change(function () {
    $('#selectprod option').remove();
    var classN = $('#selectcat option:selected').prop('class');
    var opts = allOptions.filter('.' + classN);

    $.each(opts, function (i, j) {
      $(j).appendTo('#selectprod');
    });
  });

  $('#selectprod, #selectcat').change(function () {
    var selectedValue = $('#selectprod').val();
    $('#selectedValue').val(selectedValue);
  });
});


///////////////////////// form validator ///////////////////////////////

$(document).ready(function () {
  $("#register-form").validate({ //#register-form is form id
    // Specify the validation rules
    rules: {
      account: "required",
      brand: "required",
      client: "required",
      manager: "required",
      date: "required",
      Deliverables: "required",
      specification: "required",
      quantity: "required",
    },
    submitHandler: function (form) {
      form.submit(); // Let the default form submission handle the submission
    }
  });

  // Trigger form submission when button is clicked
  $("#submitButton").click(function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    if ($("#register-form").valid()) {
      // $("#register-form").submit(); // Submit the form if it's valid
    }
  });
});


// /////////////////////////append ///////////////////////

$(document).ready(function () {
  // Event handler for first select change (within any container)
  $(document).on('change', '.filter-select', function () {
    $(this).closest('.select-box').next().find(".second-select").prop('selectedIndex', 0);
    $(".second-select").removeAttr('disabled');
    var selectedCategory = $(this).val();
    //var cost = $('.output').val($('.selectedValue').val() * $('.selectedQuantity').val());
    $(this).closest('.select-box').next().find('option').hide();
    $(this).closest('.select-box').next().find('option.' + selectedCategory).show();
    $(".second-select").on('keyup change', function () {
      //alert($(this).find(":selected").val());
      var rate = $(this).find(":selected").val();
      ///alert(rate);
      $(this).parent().closest('#popupcont').find(".selectedValue").val(rate);
      //$(this).next().next("input.selectedValue").val(rate)
    });
  });

  $(document).ready(function () {
    // Event handler for first select change (within any container)
    $(document).on('change', '.second-select', function () {

      $(".selectedQuantity").removeAttr('disabled');
      $(this).parent().closest('#popupcont').find(".selectedQuantity, .output").val('');
      updateGrandTotal();
    });
  });

  // ///////////////////////// price calculation ///////////////////////

  $(".selectedQuantity, .selectedValue").on('keyup', function () {
    $("#cloneButton").removeAttr('disabled');
    $(this).closest('#popupcont').find(".output").val(
      ($(this).closest('#popupcont').find(".second-select").val() * $(this).closest('#popupcont').find(".selectedQuantity").val()).toFixed(2)
    );
    updateGrandTotal(); // Call the function to update the grand total
  });

  $(".selectedQuantity, .selectedValue").blur(function () {
    updateGrandTotal(); // Call the function to update the grand total
  });
  function updateGrandTotal() {
    var sum = 0.00;
    $(".output").each(function () {
      sum += Number($(this).val());
    });
    var formattedSum = sum.toFixed(2);
    $('#grandTotal .grandTotal').val(formattedSum);
  }

  // ///////////////////////// price calculation ///////////////////////


  // Event handler for Clone button click
  $('#cloneButton').click(function () {
    var clonedContainer = $('#popupcont').clone(true);
    clonedContainer.find('#cloneButton').remove(); // Remove the clone button in the cloned set
    clonedContainer.append('<button id="closeButton">Delete</button>'); // Add a close button to the cloned set
    $('.clone').append(clonedContainer);

    // Clear selections in cloned container
    clonedContainer.find('select').val('');
    $(this).attr('disabled', true);
    clonedContainer.find(".selectedValue,.selectedQuantity,.output").val("");
    clonedContainer.find(".second-select").attr('disabled', true);
    clonedContainer.find(".selectedQuantity").attr('disabled', true);

    // Trigger change event on first select in cloned container to apply initial filtering
    // clonedContainer.find('#first-select').trigger('change');
    // Event handler for Close button click (within the cloned container)
    clonedContainer.find('#closeButton').click(function () {
      clonedContainer.remove(); // Remove the cloned set when the close button is clicked
      updateGrandTotal();
    });
    var firstselect = $('first-select').value;
    var secondselect = $('second-selected');
    var typeselected = secondselect.options[secondselect.selectedIndex].text;
    var priceper = $('priceperunit').value;
    var quantityper = $('quantityperunit').value;
    var totalcostunit = $('totalcost').value;
    var agrandtotalcost = $('grandtotalcost').value;
    var clonedContainer2 = $('.blueTable').clone(true);

  });
});


// Create a new Date object
var currentDate = new Date();

// Get individual components of the date and time
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
var year = currentDate.getFullYear();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();

// Add leading zero if the value is a single digit
day = day < 10 ? "0" + day : day;
month = month < 10 ? "0" + month : month;
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;

// Format the date and time as a string
var formattedDateTime = day + "-" + month + "-" + year + "_" + hours + ":" + minutes;




// ///////////////////////////////////// print to PDF ///////////////////////////////////////////

function generatePDF() {
  // Get values from the form
  var SelectedAccount = document.getElementById('selectaccount').value;
  var SelectedBrand = document.getElementById('brand').value;
  var cradeljob = document.getElementById('cradeljob').value.trim();
  var cradeljobValue = cradeljob !== '' ? cradeljob : "NA";
  var jiraTicket = document.getElementById('jiraTicket').value;
  var jiraTicketValue = jiraTicket !== '' ? jiraTicket : "NA";
  // var SelectedClient = document.getElementById('client');
  // var selecteClientPrint = SelectedClient.options[SelectedClient.selectedIndex].text;
  // var clientID = document.getElementById('clientID').value;
  // var SelectedManager = document.getElementById('manager');
  var client = document.getElementById('client');
  var selecteClientPrint = client.options[client.selectedIndex].text;
      var clientID = "";
      if (selecteClientPrint === 'other') {
        selecteClientPrint = document.getElementById('otherClientName').value;
        clientID = document.getElementById('OtrclientID').value;
      } else {
        clientID = document.getElementById('clientID').value;
      }
      var manager = document.getElementById('manager');
      var selecteManagerPrint = manager.options[manager.selectedIndex].text;
      var accountManager = "";
      if (selecteManagerPrint === 'other') {
        selecteManagerPrint = document.getElementById('otherManagerName').value;
        accountManager = document.getElementById('OtraccountManager').value;
      } else {
        accountManager = document.getElementById('accountManager').value;
      }
  // var selecteManagerPrint = SelectedManager.options[SelectedManager.selectedIndex].text;
  // var accountManager = document.getElementById('accountManager').value;
  var date = document.getElementById('date').value;
  var date2 = document.getElementById('date2').value;
  var date2Value = date2 !== '' ? date2 : "NA";

  // Check if any of the fields is empty
  // if (SelectedAccount==="NULL" || SelectedBrand==="NULL" || SelectedClient==="NULL" || clientID==="NULL" || SelectedManager==="NULL" || accountManager==="NULL" || date==="NULL") {
  //   $("#selectaccount, #brand, #client, #clientID, #manager, #accountManager, #date").css("color", "red");
  //   return;
  // }

  // If all required fields are filled, proceed to generate the popup content
  var popupContent = `
  <div class="title">
  <div class="logo">
    <img src="./egplus-color-logo.png" alt="magnon-logo">
    <h3>Project Estimate</h3>
  </div>
  <div class="sub-title">
    <p>
      Magnon Solutions Private Limited <br>
      C-168, Sector-63 Noida,<br>
      201307, U.P<br>
      India
    </p>
    <p>
      TBWA egplus Worldwide Ltd<br>
      Bankside 3, 90 Southwark Street<br>
      London, SE1 0SW<br>
      United Kingdom
    </p>
  </div>
</div><hr>
<br>
  <div class="print-info"><div class="print-heading">Account Name</div><div class="clones">:</div> ${SelectedAccount}</div>
  <div class="print-info"><div class="print-heading">Brand Name</div><div class="clones">:</div>  ${SelectedBrand}</div>
  <div class="print-info"><div class="print-heading">Cradle Job No.</div><div class="clones">:</div> ${cradeljobValue}</div>
  <div class="print-info"><div class="print-heading">Jira Ticket No.</div><div class="clones">:</div> <span id="jira"></span>${jiraTicketValue}</div>
  <div class="print-info"><div class="print-heading">Client Manager Name</div><div class="clones">:</div> ${selecteClientPrint}</div>
  <div class="print-info"><div class="print-heading">Client's Email ID</div><div class="clones">:</div> ${clientID}</div>
  <div class="print-info"><div class="print-heading">Meg+ AM/PM Name</div><div class="clones">:</div>${selecteManagerPrint}</div>
  <div class="print-info"><div class="print-heading">Meg+ AM/PM Email ID</div><div class="clones">:</div> ${accountManager}</div>
  <div class="print-info"><div class="print-heading">Project Start Date</div><div class="clones">:</div> ${date}</div>
  <div class="print-info"><div class="print-heading">Project End Date</div><div class="clones">:</div> ${date2Value}</div>
  
  &nbsp;
  &nbsp;
  <table class="blueTable">
    <thead>
      <tr>
        <th>S No.</th>
        <th>Deliverables</th>
        <th>Type/Specifications</th>
        <th>Rate (Per Unit)</th>
        <th>Quantity</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>`;

  var index = 0; // Counter for row numbers

  // Iterate over each container with class 'bcontainer' to gather data
  $('#popupcont, .clone #popupcont').each(function () {
    var firstSelectValue = $(this).find('#first-select option:selected').text();
    var secondSelectValue = $(this).find('#second-selected option:selected').text();
    var pricePerUnit = $(this).find('#priceperunit').val();
    var quantityPerUnit = $(this).find('#quantityperunit').val();
    var totalCost = $(this).find('#totalcost').val();

    // Check if the necessary fields have data
    if (firstSelectValue && secondSelectValue && pricePerUnit && quantityPerUnit && totalCost) {
      // Append the data to the popupContent
      popupContent += `
          <tr>
            <td>${index + 1}</td>
            <td>${firstSelectValue}</td>
            <td>${secondSelectValue}</td>
            <td>$${pricePerUnit}</td>
            <td>${quantityPerUnit}</td>
            <td>$${totalCost}</td>
          </tr>`;

      index++; // Increment the row number counter
    }
  });

  // Add the grand total row
  var grandTotal = $('#grandtotalcost').val();
  popupContent += `
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>Total Cost</b></td>
            <td><b>$${grandTotal}</b></td>
          </tr>
        </tbody>
      </table>`;

  // Create a temporary element to hold the dynamic HTML
  var tempElement = document.createElement('div');
  tempElement.innerHTML = popupContent;


  // Convert the dynamic HTML to PDF
  html2pdf(tempElement, {
    margin: 10,
    filename: `Project estimate_${formattedDateTime}`,
    image: { type: 'word', quality: 0.98 },
    html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });
}

// //////////////////////  alphabatical order /////////////////////////

$('#selectaccount').change(function (e) {
  $("#brand").html($("#brand option").sort(function (x, y) {
    return $(x).text() < $(y).text() ? -1 : 1;
  }))
  $("#brand").get().selectedIndex = 0;
  e.preventDefault();

});

$('#brand').change(function (e) {
  $("#client").html($("#client option").sort(function (x, y) {
    return $(x).text() < $(y).text() ? -1 : 1;
  }))
  $("#client").get().selectedIndex = 0;
  e.preventDefault();

});


$('#client').change(function (e) {
  $("#manager").html($("#manager option").sort(function (x, y) {
    return $(x).text() < $(y).text() ? -1 : 1;
  }))
  $("#manager").get().selectedIndex = 0;
  e.preventDefault();

});

// ///////////////////////////////////// print to PDF ///////////////////////////////////////////

$(".popupbtn").click(function () {
  $(".popup").fadeIn();
});
$(".close").click(function () {
  $(".popup").fadeOut();
});


// ///////////////////////////// pop up //////////////////////////






function openPopup() {
  // Get values from the form
  var SelectedAccount = document.getElementById('selectaccount').value;
  var SelectedBrand = document.getElementById('brand').value;
  var cradeljob = document.getElementById('cradeljob').value.trim();
  var cradeljobValue = cradeljob !== '' ? cradeljob : "NA";
  var jiraTicket = document.getElementById('jiraTicket').value;
  var jiraTicketValue = jiraTicket !== '' ? jiraTicket : "NA";
  // var SelectedClient = document.getElementById('client');
  // var selecteClientPrint = SelectedClient.options[SelectedClient.selectedIndex].text;
  // var clientID = document.getElementById('clientID').value;
  // var SelectedManager = document.getElementById('manager');
  var client = document.getElementById('client');
  var selecteClientPrint = client.options[client.selectedIndex].text;
      var clientID = "";
      if (selecteClientPrint === 'other') {
        selecteClientPrint = document.getElementById('otherClientName').value;
        clientID = document.getElementById('OtrclientID').value;
      } else {
        clientID = document.getElementById('clientID').value;
      }
      var manager = document.getElementById('manager');
      var selecteManagerPrint = manager.options[manager.selectedIndex].text;
      var accountManager = "";
      if (selecteManagerPrint === 'other') {
        selecteManagerPrint = document.getElementById('otherManagerName').value;
        accountManager = document.getElementById('OtraccountManager').value;
      } else {
        accountManager = document.getElementById('accountManager').value;
      }
  // var selecteManagerPrint = SelectedManager.options[SelectedManager.selectedIndex].text;
  // var accountManager = document.getElementById('accountManager').value;
  var date = document.getElementById('date').value;
  var date2 = document.getElementById('date2').value;
  var date2Value = date2 !== '' ? date2 : "NA";

  // Check if any of the fields is empty
  // if (SelectedAccount==="NULL" || SelectedBrand==="NULL" || SelectedClient==="NULL" || clientID==="NULL" || SelectedManager==="NULL" || accountManager==="NULL" || date==="NULL") {
  //   $("#selectaccount, #brand, #client, #clientID, #manager, #accountManager, #date").css("color", "red");
  //   return;
  // }

  // If all required fields are filled, proceed to generate the popup content
  var popupContent = `
  <div class="title">
  <div class="logo">
    <img src="./egplus-color-logo.png" alt="magnon-logo">
    <h3>Project Estimate</h3>
  </div>
  <div class="sub-title">
    <p>
      Magnon Solutions Private Limited <br>
      C-168, Sector-63 Noida,<br>
      201307, U.P<br>
      India
    </p>
    <p>
      TBWA egplus Worldwide Ltd<br>
      Bankside 3, 90 Southwark Street<br>
      London, SE1 0SW<br>
      United Kingdom
    </p>
  </div>
</div><hr>
<br>
  <div class="print-info"><div class="print-heading">Account Name</div><div class="clones">:</div> ${SelectedAccount}</div>
  <div class="print-info"><div class="print-heading">Brand Name</div><div class="clones">:</div>  ${SelectedBrand}</div>
  <div class="print-info"><div class="print-heading">Cradle Job No.</div><div class="clones">:</div> ${cradeljobValue}</div>
  <div class="print-info"><div class="print-heading">Jira Ticket No.</div><div class="clones">:</div> <span id="jira"></span>${jiraTicketValue}</div>
  <div class="print-info"><div class="print-heading">Client Manager Name</div><div class="clones">:</div> ${selecteClientPrint}</div>
  <div class="print-info"><div class="print-heading">Client's Email ID</div><div class="clones">:</div> ${clientID}</div>
  <div class="print-info"><div class="print-heading">Meg+ AM/PM Name</div><div class="clones">:</div>${selecteManagerPrint}</div>
  <div class="print-info"><div class="print-heading">Meg+ AM/PM Email ID</div><div class="clones">:</div> ${accountManager}</div>
  <div class="print-info"><div class="print-heading">Project Start Date</div><div class="clones">:</div> ${date}</div>
  <div class="print-info"><div class="print-heading">Project End Date</div><div class="clones">:</div> ${date2Value}</div>
  
  &nbsp;
  &nbsp;
  <table class="blueTable">
    <thead>
      <tr>
        <th>S No.</th>
        <th>Deliverables</th>
        <th>Type/Specifications</th>
        <th>Rate (Per Unit)</th>
        <th>Quantity</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>`;

var index = 0; // Counter for row numbers

// Iterate over each container with class 'bcontainer' to gather data
$('#popupcont, .clone #popupcont').each(function () {
var firstSelectValue = $(this).find('#first-select option:selected').text();
var secondSelectValue = $(this).find('#second-selected option:selected').text();
var pricePerUnit = $(this).find('#priceperunit').val();
var quantityPerUnit = $(this).find('#quantityperunit').val();
var totalCost = $(this).find('#totalcost').val();

// if (!firstSelectValue || !secondSelectValue || !pricePerUnit || !quantityPerUnit || !totalCost) {
//   alert("Fill required option");
//   return;
// }

// Check if the necessary fields have data
if (firstSelectValue && secondSelectValue && pricePerUnit && quantityPerUnit && totalCost) {
  // Append the data to the popupContent
  popupContent += `
      <tr>
        <td>${index + 1}</td>
        <td>${firstSelectValue}</td>
        <td>${secondSelectValue}</td>
        <td>$${pricePerUnit}</td>
        <td>${quantityPerUnit}</td>
        <td>$${totalCost}</td>
      </tr>`;

  index++; // Increment the row number counter
}
});



// Add the grand total row
var grandTotal = $('#grandtotalcost').val();
popupContent += `
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><b>Total Cost</b></td>
        <td><b>$${grandTotal}</b></td>
      </tr>
    </tbody>
  </table>
  
  <button class="popupbtn" type="button" onclick="generatePDF()">Download Estimate</button>`;

  // Set the HTML content of the popup
  $('#popup-main #popup').html(popupContent);

  // Show the popup
  $('#popup-main').fadeIn();
  $(".popupclose").click(function () {
    $('#popup-main').css("display", "none");
  });
}
