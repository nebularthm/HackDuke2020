# -*- coding: utf-8 -*-
"""
Created on Sat Dec  5 14:36:48 2020

@author: schmi,michael
"""


from bs4 import BeautifulSoup
import datetime
import requests
class Scraper:
    #shoutout google

    def __init__(self,state,position,seat = -1,year=datetime.datetime.now().year):
        us_state_abbrev = {
        'Alabama': 'AL',
        'Alaska': 'AK',
        'American Samoa': 'AS',
        'Arizona': 'AZ',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'District of Columbia': 'DC',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Guam': 'GU',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'IN',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Northern Mariana Islands':'MP',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Pennsylvania': 'PA',
        'Puerto Rico': 'PR',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virgin Islands': 'VI',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY'
}
        self.state = state
        self.state_abbrev = us_state_abbrev.get(state).lower()#automatically convert state to abbreviation
        self.position = position
        self.seat = seat
        self.year = year
        return
    def scrape(self):
        #scrape starting pages to get sets of links for individual races
        start_url = "https://ballotpedia.org/" + self.state + "_" + self.position + "_elections,_" + str(self.year)
        start_page = requests.get(start_url).text
        #print(start_page.text)
        soup = BeautifulSoup(start_page,'html.parser')
        races = []
        for item in soup.find_all("h3"):
            if not (item.next_sibling.next_sibling.span == None):
                clist = item.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling
                race = []
                for text in clist.find_all("a"):
                    if not (text.string==None):
                        race.append(text.string)##we just want the position name for spacing
                races.append(race)
        #for r in races:
            #print(r[0]+ " vs " + r[1])
        return races
    # returns top N campaign contributors (default 5): names, contribution amounts, and 
    # type (entity/individual) in a list of lists containting this information.
    def contributions(self,candidate="Tricia_Shields", topN =5):
        candidate = candidate.replace("_","-")
        candidate = candidate.replace(" ", "-")
        url = "https://www.transparencyusa.org/" + self.state_abbrev + "/candidate/" + candidate
        candidate_page = requests.get(url).text
        soup = BeautifulSoup(candidate_page,'html.parser')
        table = soup.find("table",attrs={"aria-colcount":3})
        rows = table.find_all("tr")
        row = 0
        contributors = []
        while row <= topN:
            currentrow = rows[row]
            data = currentrow.find_all("td")
            data_group = []
            for d in data:
                data_group.append(d.string)
            contributors.append(data_group)
            row = row+1
        return contributors
        
            
if __name__=="__main__":
    s = Scraper("North_Carolina","intermediate_appellate_court")
    s.scrape()
    s.contributions()