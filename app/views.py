from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'app/index.html')

def empresas(request):
    return render(request, 'app/empresas.html')

def catalogos(request):
    return render(request, "app/catalogos.html")

def agierre(request):
    return render(request, 'app/empresa/agierre.html')

def ballestra(request):
    return render(request, 'app/empresa/ballestra.html')

def bft(request):
    return render(request, 'app/empresa/bft.html')

def bhdt(request):
    return render(request, 'app/empresa/bhdt.html')

def breitenfeldsteel(request):
    return render(request, 'app/empresa/BREITENFELDSTEEL.html')

def conthermo(request):
    return render(request, 'app/empresa/CONTHERMO.html')

def christofgroup(request):
    return render(request, 'app/empresa/christofgroup.html')

def fundicaomorandini(request):
    return render(request, 'app/empresa/fundicaomorandini.html')

def gigkarasek(request):
    return render(request, 'app/empresa/GIGKARASEK.html')

def gmp(request):
    return render(request, 'app/empresa/GMP.html')

def lordsteel(request):
    return render(request, 'app/empresa/LORDSTEEL.html')

def maronsteel(request):
    return render(request, 'app/empresa/MARONSTEEL.html')

def raumaster(request):
    return render(request, 'app/empresa/RAUMASTER.html')

def schlick(request):
    return render(request, 'app/empresa/SCHLICK.html')

def schmidtclemens(request):
    return render(request, 'app/empresa/SCHMIDTCLEMENS.html')

def siepmannwerke(request):
    return render(request, 'app/empresa/SIEPMANNWERKE.html')

def termomeccanica(request):
    return render(request, 'app/empresa/termomeccanica.html')

def vana(request):
    return render(request, 'app/empresa/vana.html')
