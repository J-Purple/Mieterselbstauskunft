window.formA_HTML = `
<div class="page">
<h1>Mieterselbstauskunft</h1>
<div class="field-row">
<span class="field-label">Name, Vorname:</span>
<div class="field-line"><textarea data-field="hdr_name1" placeholder="Last name, First name (Tenant 1)" rows="1"></textarea></div>
</div>
<div class="field-row">
<span class="field-label">Name, Vorname:</span>
<div class="field-line"><textarea data-field="hdr_name2" placeholder="Last name, First name (Tenant 2)" rows="1"></textarea></div>
</div>
<p style="margin-top:14px; margin-bottom:8px;">
    Ich/Wir &nbsp;&nbsp; sind &nbsp;&nbsp; an &nbsp;&nbsp; der &nbsp;&nbsp; Anmietung &nbsp;&nbsp; des &nbsp;&nbsp; Objektes
  </p>
<div class="interested-row">
<div class="field-line" style="flex:2; min-width:200px;"><textarea data-field="property_address" placeholder="Property address" rows="1"></textarea></div>
<span class="field-label">zum</span>
<div class="field-line" style="flex:1; min-width:100px;"><textarea data-field="move_in_date" placeholder="Move-in date" rows="1"></textarea></div>
<span class="field-label">interessiert.</span>
</div>
<p>Die nachfolgenden Informationen teile/n ich/wir dem Vermieter auf Grundlage einer freiwilligen Selbstauskunft im Rahmen des Anmietungswunsches mit:</p>
<table class="info-table">
<thead>
<tr>
<th></th>
<th>Mietinteressent/in 1</th>
<th>Mietinteressent/in 2</th>
</tr>
</thead>
<tbody>
<tr><td>Name, Vorname</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_name" placeholder="Full name" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_name" placeholder="Full name" rows="1"></textarea></td></tr>
<tr><td>Geburtsdatum,-ort</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_dob" placeholder="DD.MM.YYYY, City" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_dob" placeholder="DD.MM.YYYY, City" rows="1"></textarea></td></tr>
<tr><td>Familienstand</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_status" placeholder="e.g. Single / Married" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_status" placeholder="e.g. Single / Married" rows="1"></textarea></td></tr>
<tr><td>Aktuelle Anschrift</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_addr" placeholder="Current address" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_addr" placeholder="Current address" rows="1"></textarea></td></tr>
<tr><td>Telefon</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_phone" placeholder="Phone number" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_phone" placeholder="Phone number" rows="1"></textarea></td></tr>
<tr><td>Email</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_email" placeholder="Email address" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_email" placeholder="Email address" rows="1"></textarea></td></tr>
<tr><td>Aktueller Beruf</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_job" placeholder="Current occupation" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_job" placeholder="Current occupation" rows="1"></textarea></td></tr>
<tr><td>Derzeitiger Arbeitgeber</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_employer" placeholder="Employer name" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_employer" placeholder="Employer name" rows="1"></textarea></td></tr>
<tr><td>Beschäftigt seit</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_since" placeholder="Employed since (month/year)" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_since" placeholder="Employed since (month/year)" rows="1"></textarea></td></tr>
<tr><td>Monatliches Nettoeinkommen</td><td data-label="Mietinteressent/in 1"><textarea class="table-input" data-field="t1_income" placeholder="Net monthly income (€)" rows="1"></textarea></td><td data-label="Mietinteressent/in 2"><textarea class="table-input" data-field="t2_income" placeholder="Net monthly income (€)" rows="1"></textarea></td></tr>
</tbody>
</table>
<p>Neben mir/uns werden die nachfolgenden Personen das Objekt beziehen:</p>
<div class="person-block">
<div class="person-title">Person 1</div>
<div class="field-row"><span class="field-label">Name, Vorname:</span><div class="field-line"><textarea data-field="p1_name" placeholder="Last name, First name" rows="1"></textarea></div></div>
<div class="field-row"><span class="field-label">Geburtsdatum, -ort:</span><div class="field-line"><textarea data-field="p1_dob" placeholder="DD.MM.YYYY, City" rows="1"></textarea></div></div>
<div class="field-row"><span class="field-label">Aktuelle Anschrift:</span><div class="field-line"><textarea data-field="p1_addr" placeholder="Current address" rows="1"></textarea></div></div>
</div>
<div class="person-block">
<div class="person-title">Person 2</div>
<div class="field-row"><span class="field-label">Name, Vorname:</span><div class="field-line"><textarea data-field="p2_name" placeholder="Last name, First name" rows="1"></textarea></div></div>
<div class="field-row"><span class="field-label">Geburtsdatum, -ort:</span><div class="field-line"><textarea data-field="p2_dob" placeholder="DD.MM.YYYY, City" rows="1"></textarea></div></div>
<div class="field-row"><span class="field-label">Aktuelle Anschrift:</span><div class="field-line"><textarea data-field="p2_addr" placeholder="Current address" rows="1"></textarea></div></div>
</div>
</div><div class="page">
<div class="person-block">
<div class="person-title">Person 3</div>
<div class="field-row"><span class="field-label">Name, Vorname:</span><div class="field-line"><textarea data-field="p3_name" placeholder="Last name, First name" rows="1"></textarea></div></div>
<div class="field-row"><span class="field-label">Geburtsdatum, -ort:</span><div class="field-line"><textarea data-field="p3_dob" placeholder="DD.MM.YYYY, City" rows="1"></textarea></div></div>
<div class="field-row"><span class="field-label">Aktuelle Anschrift:</span><div class="field-line"><textarea data-field="p3_addr" placeholder="Current address" rows="1"></textarea></div></div>
</div>
<hr class="section-divider"/>
<div class="question-block">
<div class="question-text">Bestehen Mietrückstände aus vorherigen Mietverhältnissen?</div>
<div class="question-en">Are there any outstanding rent arrears from previous tenancies?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q1" name="q1" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q1" name="q1" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
</div>
<div class="question-block">
<div class="question-text">Haben Sie Vorstrafen oder lag in den letzten 5 Jahren ein Haftbefehl im Rahmen eines Mietverhältnisses gegen Sie vor:</div>
<div class="question-en">Do you have a criminal record or has an arrest warrant related to a tenancy been issued against you in the last 5 years?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q2" name="q2" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q2" name="q2" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
<div class="follow-up"><span>Wenn ja, wann?</span><div class="follow-up-line"><textarea data-field="q2_detail" placeholder="If yes, when?" rows="1"></textarea></div></div>
<div class="follow-up-second-line"></div>
</div>
<div class="question-block">
<div class="question-text">Beziehen Sie Sozialleistungen zur Zahlung der Miete und/oder Kaution?</div>
<div class="question-en">Do you receive social benefits to cover rent and/or the security deposit?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q3" name="q3" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q3" name="q3" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
<div class="follow-up"><span>Wenn ja, welche und in welchem Umfang?</span><div class="follow-up-line"><textarea data-field="q3_detail" placeholder="If yes, which and to what extent?" rows="1"></textarea></div></div>
</div>
<div class="question-block">
<div class="question-text">Beabsichtigen Sie das Objekt gewerblich zu nutzen?</div>
<div class="question-en">Do you intend to use the property for commercial purposes?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q4" name="q4" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q4" name="q4" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
<div class="follow-up"><span>Wenn ja, zu welchem Zweck?</span><div class="follow-up-line"><textarea data-field="q4_detail" placeholder="If yes, for what purpose?" rows="1"></textarea></div></div>
</div>
<div class="question-block">
<div class="question-text">Beabsichtigen Sie Tiere in dem Objekt zu halten?</div>
<div class="question-en">Do you intend to keep animals in the property?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q5" name="q5" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q5" name="q5" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
<div class="follow-up"><span>Wenn ja, welche?</span><div class="follow-up-line"><textarea data-field="q5_detail" placeholder="If yes, which ones?" rows="1"></textarea></div></div>
<div class="follow-up-second-line"></div>
</div>
<div class="question-block">
<div class="question-text">Wurden in den letzten 5 Jahren Räumungsklagen gegen Sie erhoben?</div>
<div class="question-en">Have any eviction proceedings been filed against you in the last 5 years?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q6" name="q6" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q6" name="q6" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
<div class="follow-up"><span>Wenn ja, wann?</span><div class="follow-up-line"><textarea data-field="q6_detail" placeholder="If yes, when?" rows="1"></textarea></div></div>
<div class="follow-up-second-line"></div>
</div>
<div class="question-block">
<div class="question-text">Wurden in den letzten 5 Jahren Zwangsvollstreckungen im Zusammenhang mit Mietverhältnissen gegen Sie eingeleitet?</div>
<div class="question-en">Have any forced evictions in connection with a tenancy been initiated against you in the last 5 years?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q7" name="q7" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q7" name="q7" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
<div class="follow-up"><span>Wenn ja, wann?</span><div class="follow-up-line"><textarea data-field="q7_detail" placeholder="If yes, when?" rows="1"></textarea></div></div>
<div class="follow-up-second-line"></div>
</div>
</div><div class="page">
<div class="question-block">
<div class="question-text">Wurde in den letzten 5 Jahren ein Insolvenzverfahren gegen Sie eingeleitet</div>
<div class="question-en">Have any insolvency proceedings been initiated against you in the last 5 years?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q8" name="q8" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q8" name="q8" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
<div class="follow-up"><span>Wenn ja, wann?</span><div class="follow-up-line"><textarea data-field="q8_detail" placeholder="If yes, when?" rows="1"></textarea></div></div>
<div class="follow-up-second-line"></div>
</div>
<div class="question-block" style="margin-top:18px;">
<div class="question-text">Haben Sie eine Haftpflichtversicherung und Hausratversicherung?</div>
<div class="question-en">Do you have personal liability insurance and household contents insurance?</div>
<div class="yesno-row">
<label class="yesno-option"><input data-field="q9" name="q9" type="radio" value="ja"/><span class="radio-dot"></span>ja</label>
<label class="yesno-option"><input checked="" data-field="q9" name="q9" type="radio" value="nein"/><span class="radio-dot"></span>nein</label>
</div>
<div class="follow-up"><span>Wenn ja, welche?</span><div class="follow-up-line"><textarea data-field="q9_detail" placeholder="If yes, which ones?" rows="1"></textarea></div></div>
<div class="follow-up-second-line"></div>
</div>
<hr class="section-divider"/>
<div class="declarations">
<div class="declaration-item">
<span class="decl-dot" data-field="d1" title="Click to mark"></span>
<span>Ich/Wir erkläre/n, dass ich/wir in der Lage bin/sind sämtliche Verpflichtungen des Mietvertrags zu erfüllen.</span>
</div>
<div class="declaration-item">
<span class="decl-dot" data-field="d2" title="Click to mark"></span>
<span>Ich/Wir erkläre/n, dass sämtliche vorgenannten Angaben wahrheitsgemäß und vollständig von mir/uns getätigt wurden.</span>
</div>
<div class="declaration-item">
<span class="decl-dot" data-field="d3" title="Click to mark"></span>
<span>Ich/Wir habe/n den Unterlagen eine aktuelle Schufa Selbstauskunft beigefügt.</span>
</div>
<div class="declaration-item">
<span class="decl-dot" data-field="d4" title="Click to mark"></span>
<span>Ich/Wir habe/n den Unterlagen die letzten drei Lohn-/Gehaltsabrechnungen beigefügt.</span>
</div>
<div class="declaration-item">
<span class="decl-dot" data-field="d5" title="Click to mark"></span>
<span>Ich/Wir habe/n den Unterlagen eine Kopie des/der Personalausweise/s.</span>
</div>
</div>
<hr class="section-divider"/>
<p class="note-text">Bei falschen Angaben, behält der Vermieter sich nach Abschluss eines Mietvertrages eine Aufhebung oder fristlose Kündigung des Mietvertrages vor.</p>
<p class="note-text">Sofern diese Auskünfte vom Vermieter nicht mehr benötigt werden, wird dieser die Informationen gemäß Bundesdatenschutzgesetz umgehend vernichten (z.B. nach Beendigung des Mietverhältnisses).</p>
<div class="signature-row">
<div class="sig-field">
<div class="sig-line"><textarea data-field="sig_place_date" placeholder="City, Date" rows="1"></textarea></div>
<div class="sig-label">Ort, Datum</div>
</div>
<div class="sig-field">
<div class="sig-line"></div>
<div class="sig-label">Unterschrift Mietinteressent/in 1</div>
</div>
<div class="sig-field">
<div class="sig-line"></div>
<div class="sig-label">Unterschrift Mietinteressent/in 2</div>
</div>
</div>
</div>
`;
